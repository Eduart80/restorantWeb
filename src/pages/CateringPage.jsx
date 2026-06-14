import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const packages = [
  {
    name: 'Antipasto & Starters',
    desc: 'A selection of house-made bruschetta, caprese platters, charcuterie boards, and seasonal appetizers — perfect for cocktail-style receptions.',
    serves: 'From 20 guests',
    icon: 'fa-solid fa-bowl-food',
  },
  {
    name: 'Pasta & Risotto Station',
    desc: 'Interactive pasta station with your choice of three handmade pastas and sauces, served live by our chefs.',
    serves: 'From 30 guests',
    icon: 'fa-solid fa-utensils',
  },
  {
    name: 'Full Italian Buffet',
    desc: 'A complete spread including starters, two pasta dishes, a main protein, sides, desserts, and non-alcoholic beverages.',
    serves: 'From 40 guests',
    icon: 'fa-solid fa-plate-wheat',
  },
  {
    name: 'Plated Dinner Service',
    desc: 'Elegant multi-course plated dinners for weddings, corporate galas, and private celebrations. Custom menus available.',
    serves: 'From 50 guests',
    icon: 'fa-solid fa-star',
  },
  {
    name: 'Corporate Lunch Boxes',
    desc: 'Individually packed Italian lunches for meetings and office events. Includes a main, side, dessert, and drink.',
    serves: 'From 10 guests',
    icon: 'fa-solid fa-briefcase',
  },
  {
    name: 'Dessert & Dolci Table',
    desc: 'A lavish display of tiramisù, panna cotta, cannoli, and seasonal Italian sweets — the perfect finishing touch.',
    serves: 'Add-on or standalone',
    icon: 'fa-solid fa-cake-candles',
  },
];

const defaultForm = { name: '', email: '', phone: '', event: '', date: '', guests: '', notes: '' };

export default function CateringPage() {
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
        <span className="section-tag">Private Events</span>
        <h1>Catering & Events</h1>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p>Authentic Italian catering for weddings, corporate events, and private celebrations.</p>
      </div>

      {/* Packages */}
      <section className="catering-packages">
        <span className="section-tag">What We Offer</span>
        <h2 className="section-title">Catering Packages</h2>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p className="section-desc">Every event is tailored to your vision. Choose a package or let us build a custom menu.</p>
        <div className="catering-grid">
          {packages.map((pkg) => (
            <div className="catering-card" key={pkg.name}>
              <i className={pkg.icon}></i>
              <h3>{pkg.name}</h3>
              <p>{pkg.desc}</p>
              <span className="catering-serves">{pkg.serves}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="reservation reservation-page" style={{ paddingTop: '80px' }}>
        <span className="section-tag">Get in Touch</span>
        <h2 className="section-title">Request a Catering Quote</h2>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p className="section-desc">Fill out the form and our events team will get back to you within 24 hours.</p>

        {submitted ? (
          <div className="res-success">
            <i className="fa-solid fa-circle-check"></i>
            <h2>Inquiry Received!</h2>
            <p>We'll be in touch shortly to discuss your event.</p>
            <Link to="/" className="btn-solid" style={{ display: 'inline-block', marginTop: '24px' }}>Back to Home</Link>
          </div>
        ) : (
          <form className="res-form res-form-full" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            <input type="text" name="event" placeholder="Event Type (e.g. Wedding, Corporate)" value={form.event} onChange={handleChange} required />
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
            <input type="number" name="guests" placeholder="Estimated Number of Guests" value={form.guests} onChange={handleChange} required min="1" />
            <textarea
              name="notes"
              placeholder="Additional details or special requests (optional)"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              style={{ gridColumn: '1 / -1' }}
            />
            <button type="submit" className="btn-solid" style={{ border: 'none', cursor: 'pointer', gridColumn: '1 / -1' }}>
              Submit Inquiry
            </button>
          </form>
        )}
      </section>

      <Footer />
    </>
  );
}
