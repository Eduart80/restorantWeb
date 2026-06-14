import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const defaultForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm(defaultForm);
  }

  return (
    <>
      <Nav />

      {/* Hero Banner */}
      <div className="res-page-hero">
        <span className="section-tag">We'd Love to Hear From You</span>
        <h1>Contact Us</h1>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p>Reach out for reservations, catering inquiries, or just to say hello.</p>
      </div>

      {/* Info + Form */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* Info column */}
          <div className="contact-info">
            <h3>Visit Us</h3>
            <div className="contact-info-item">
              <i className="fa-solid fa-location-dot"></i>
              <p>7777 Warren Pkwy<br />Frisco, TX 75034</p>
            </div>
            <div className="contact-info-item">
              <i className="fa-solid fa-phone"></i>
              <p><a href="tel:+12143089510">+1 (214) 308-9510</a></p>
            </div>
            <div className="contact-info-item">
              <i className="fa-solid fa-envelope"></i>
              <p><a href="mailto:info@miogustofrisco.com">info@miogustofrisco.com</a></p>
            </div>
            <div className="contact-info-item">
              <i className="fa-brands fa-instagram"></i>
              <p>
                <a href="https://www.instagram.com/miogusto.italiancuisine" target="_blank" rel="noopener noreferrer">
                  @miogusto.italiancuisine
                </a>
              </p>
            </div>

            <h3 style={{ marginTop: '40px' }}>Hours</h3>
            <div className="contact-hours">
              <div className="hours-row"><span>Tuesday – Thursday</span><span>11am – 9:30pm</span></div>
              <div className="hours-row"><span>Friday – Saturday</span><span>11am – 10pm</span></div>
              <div className="hours-row"><span>Sunday</span><span>11am – 9:30pm</span></div>
              <div className="hours-row closed"><span>Monday</span><span>Closed</span></div>
            </div>

            <div style={{ marginTop: '36px' }}>
              <Link to="/reservation" className="btn-solid">Reserve a Table</Link>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="res-success" style={{ padding: '60px 20px' }}>
                <i className="fa-solid fa-circle-check"></i>
                <h2>Message Sent!</h2>
                <p>We'll get back to you as soon as possible.</p>
                <Link to="/" className="btn-solid" style={{ display: 'inline-block', marginTop: '24px' }}>Back to Home</Link>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone Number (optional)" value={form.phone} onChange={handleChange} />
                <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <button type="submit" className="btn-solid" style={{ border: 'none', cursor: 'pointer', width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
