import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests. Please try again in 15 minutes.' },
});

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim().slice(0, 1000);
}

function validateRequired(fields, body) {
  const missing = fields.filter((f) => !body[f] || !String(body[f]).trim());
  if (missing.length) return `Missing required fields: ${missing.join(', ')}`;
  return null;
}

// ── Reservation ──
app.post('/api/reservation', formLimiter, async (req, res) => {
  const err = validateRequired(['name', 'email', 'date', 'time', 'guests'], req.body);
  if (err) return res.status(400).json({ error: err });

  const { name, email, phone, date, time, guests, notes } = req.body;

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.RESTAURANT_EMAIL,
      replyTo: sanitize(email),
      subject: `New Reservation — ${sanitize(name)} · ${sanitize(date)}`,
      html: `
        <h2>New Reservation Request</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:6px 12px"><strong>Name</strong></td><td style="padding:6px 12px">${sanitize(name)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Email</strong></td><td style="padding:6px 12px">${sanitize(email)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Phone</strong></td><td style="padding:6px 12px">${sanitize(phone) || '—'}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Date</strong></td><td style="padding:6px 12px">${sanitize(date)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Time</strong></td><td style="padding:6px 12px">${sanitize(time)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Guests</strong></td><td style="padding:6px 12px">${sanitize(guests)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Notes</strong></td><td style="padding:6px 12px">${sanitize(notes) || '—'}</td></tr>
        </table>
      `,
    });
    res.json({ ok: true });
  } catch (e) {
    console.error('Reservation email failed:', e.message);
    res.status(500).json({ error: 'Failed to send. Please call us directly.' });
  }
});

// ── Catering ──
app.post('/api/catering', formLimiter, async (req, res) => {
  const err = validateRequired(['name', 'email', 'event', 'date', 'guests'], req.body);
  if (err) return res.status(400).json({ error: err });

  const { name, email, phone, event, date, guests, notes } = req.body;

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.RESTAURANT_EMAIL,
      replyTo: sanitize(email),
      subject: `Catering Inquiry — ${sanitize(name)} · ${sanitize(event)}`,
      html: `
        <h2>New Catering Inquiry</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:6px 12px"><strong>Name</strong></td><td style="padding:6px 12px">${sanitize(name)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Email</strong></td><td style="padding:6px 12px">${sanitize(email)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Phone</strong></td><td style="padding:6px 12px">${sanitize(phone) || '—'}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Event Type</strong></td><td style="padding:6px 12px">${sanitize(event)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Date</strong></td><td style="padding:6px 12px">${sanitize(date)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Guests</strong></td><td style="padding:6px 12px">${sanitize(guests)}</td></tr>
          <tr><td style="padding:6px 12px"><strong>Notes</strong></td><td style="padding:6px 12px">${sanitize(notes) || '—'}</td></tr>
        </table>
      `,
    });
    res.json({ ok: true });
  } catch (e) {
    console.error('Catering email failed:', e.message);
    res.status(500).json({ error: 'Failed to send. Please call us directly.' });
  }
});

// ── Serve React build ──
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*catchAll', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
