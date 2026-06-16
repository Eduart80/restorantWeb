import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const defaultForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  notes: '',
};

export default function ReservationPage() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm(defaultForm);
  }

  return (
    <>
      <Nav />

      {/* Reservation Hero Banner */}
      <div className="res-page-hero">
        <span className="section-tag">Book Your Table</span>
        <h1>Make a Reservation</h1>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p>Reserve your table online and we'll have everything ready for your arrival.</p>
      </div>

      {/* Form Section */}
      <section className="reservation reservation-page" id="reservation">
        {submitted ? (
          <div className="res-success">
            <i className="fa-solid fa-circle-check"></i>
            <h2>Reservation Request Sent!</h2>
            <p>We'll confirm your table shortly. See you soon!</p>
            <Link to="/" className="btn-solid" style={{ display: 'inline-block', marginTop: '24px' }}>
              Back to Home
            </Link>
          </div>
        ) : (
          <form className="res-form res-form-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
            <select name="guests" value={form.guests} onChange={handleChange} required>
              <option value="">Number of Guests</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6 Guests</option>
              <option>7+ Guests</option>
            </select>
            <textarea
              name="notes"
              placeholder="Special requests or occasion (optional)"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              style={{ gridColumn: '1 / -1' }}
            />
            <button
              type="submit"
              className="btn-solid"
              style={{ border: 'none', cursor: 'pointer', gridColumn: '1 / -1' }}
            >
              Reserve Now
            </button>
          </form>
        )}
      </section>

      <Footer />
    </>
  );
}
