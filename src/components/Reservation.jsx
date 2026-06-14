import { useState } from 'react';

const defaultForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
};

export default function Reservation() {
  const [form, setForm] = useState(defaultForm);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Reservation request sent for ${form.name}!`);
    setForm(defaultForm);
  }

  return (
    <section className="reservation" id="reservation">
      <span className="section-tag">Book Your Table</span>
      <h2 className="section-title">Make a Reservation</h2>
      <div className="section-line">
        <span></span>&#10022;<span></span>
      </div>
      <p className="section-desc">
        Reserve your table online and we&apos;ll have everything ready for your arrival.
      </p>
      <form className="res-form" onSubmit={handleSubmit}>
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
          <option value="">Guests</option>
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5+ Guests</option>
        </select>
        <button type="submit" className="btn-solid" style={{ border: 'none', cursor: 'pointer' }}>
          Reserve Now
        </button>
      </form>
    </section>
  );
}
