import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const menu = [
  {
    category: 'Pasta',
    icon: 'fa-solid fa-utensils',
    note: 'All entrées served with bread · Serves 10 people',
    items: [
      { name: 'Spaghetti Marinara', desc: 'Classic house-made tomato sauce.', price: '$120' },
      { name: 'Spaghetti with Meatballs', desc: 'Spaghetti with house-made beef meatballs in tomato sauce.', price: '$140' },
      { name: 'Spaghetti Bolognese', desc: 'Slow-simmered meat sauce with a touch of cream.', price: '$140' },
      { name: 'Fettuccine Alfredo', desc: 'Creamy white wine Alfredo sauce with shallots.', price: '$130', addon: 'Add chicken +$30' },
      { name: 'Penne alla Vodka', desc: 'Penne pasta in a pink vodka sauce with basil and pancetta.', price: '$140' },
      { name: 'Pasta Primavera', desc: 'Broccoli, zucchini, peppers, asparagus, mushrooms with garlic and olive oil.', price: '$140' },
      { name: 'Lasagna', desc: 'Ground beef, béchamel, tomato sauce.', price: '$150' },
    ],
  },
  {
    category: 'Chicken',
    icon: 'fa-solid fa-drumstick-bite',
    note: 'All chicken entrées served with pasta and bread · Serves 10 people',
    items: [
      { name: 'Parmigiana', desc: 'Pan-fried chicken, tomato sauce, mozzarella.', price: '$160' },
      { name: 'Marsala', desc: 'Chicken, mushrooms, Marsala wine sauce.', price: '$160' },
      { name: 'Piccata', desc: 'Chicken, capers, white wine lemon sauce.', price: '$160' },
      { name: 'Saltimbocca', desc: 'Chicken, prosciutto, sage, white wine sauce.', price: '$160' },
      { name: 'Francese', desc: 'Egg-dipped chicken in lemon white wine sauce.', price: '$160' },
      { name: 'Livornese', desc: 'Chicken, olives, capers, onions, tomato sauce.', price: '$160' },
    ],
  },
  {
    category: 'Salads',
    icon: 'fa-solid fa-leaf',
    note: 'Serves 10 people',
    items: [
      { name: 'Caesar Salad', desc: 'Romaine, house breadcrumbs, Parmigiano-Reggiano, Caesar dressing.', price: '$60', addon: 'Add chicken +$30' },
      { name: 'Mio Gusto Salad', desc: 'Mixed greens, cherry tomatoes, asparagus, roasted peppers, sliced almonds, balsamic dressing.', price: '$70', addon: 'Add chicken +$30' },
    ],
  },
  {
    category: 'Seafood',
    icon: 'fa-solid fa-shrimp',
    note: 'All entrées served with bread · Serves 10 people',
    items: [
      { name: 'Shrimp Scampi', desc: 'Shrimp sautéed with garlic and basil in a white wine lemon sauce over linguine pasta.', price: '$180' },
      { name: 'Shrimp Fra Diavolo', desc: 'Shrimp sautéed in a spicy marinara sauce over linguine pasta.', price: '$180' },
    ],
  },
  {
    category: 'Pizza — 16"',
    icon: 'fa-solid fa-pizza-slice',
    note: null,
    items: [
      { name: 'Margherita', desc: 'Buffalo mozzarella, tomato, basil.', price: '$22.95' },
      { name: 'Rucola', desc: 'Arugula, prosciutto, cherry tomatoes.', price: '$22.95' },
      { name: 'Bianca', desc: 'Mozzarella, ricotta, parmesan.', price: '$22.95' },
      { name: 'Capricciosa', desc: 'Pepperoni, Canadian bacon, sausage, mushrooms, peppers, olives.', price: '$22.95' },
      { name: 'Primavera', desc: 'Broccoli, zucchini, peppers, asparagus, mushrooms.', price: '$22.95' },
      { name: 'Chicken Pesto', desc: 'Grilled chicken, pesto, cherry tomatoes.', price: '$22.95' },
      { name: 'Build Your Own', desc: null, price: '$20.95', toppings: ['Sausage', 'Pepperoni', 'Canadian Bacon', 'Hamburger', 'Mushroom', 'Peppers', 'Olives', 'Onions', 'Spinach', 'Tomatoes'] },
    ],
  },
  {
    category: 'Desserts',
    icon: 'fa-solid fa-cake-candles',
    note: 'Serves 10 people',
    items: [
      { name: 'Housemade Tiramisu', desc: null, price: '$89.50' },
      { name: 'Housemade Cheesecake', desc: null, price: '$89.50' },
      { name: 'Chocolate Mousse Cake', desc: null, price: '$79.50' },
      { name: 'Cannoli', desc: null, price: '$69.50' },
    ],
  },
];

const defaultForm = { name: '', email: '', phone: '', event: '', date: '', guests: '', notes: '' };

export default function CateringPage() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/catering', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSubmitted(true);
      setForm(defaultForm);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or call us directly.');
    } finally {
      setSending(false);
    }
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

      {/* Menu */}
      <section className="catering-packages">
        <span className="section-tag">What We Offer</span>
        <h2 className="section-title">Catering Menu</h2>
        <div className="section-line"><span></span>&#10022;<span></span></div>
        <p className="section-desc">Every event is tailored to your vision. Choose your dishes or let us build a custom menu.</p>
        <div className="catering-menu-list">
          {menu.map((cat) => (
            <div className="catering-menu-card" key={cat.category}>
              <div className="catering-menu-card-header">
                <i className={cat.icon}></i>
                <h3>{cat.category}</h3>
                {cat.note && <span className="catering-serves">{cat.note}</span>}
              </div>
              <ul className="catering-menu-items">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="catering-item-top">
                      <span className="catering-item-name">{item.name}</span>
                      <span className="catering-item-price">{item.price}</span>
                    </div>
                    {item.desc && <p className="catering-item-desc">{item.desc}</p>}
                    {item.toppings && (
                      <div className="catering-toppings">
                        <span className="catering-toppings-label">+$2.00 each</span>
                        <div className="catering-toppings-list">
                          {item.toppings.map((t) => <span key={t} className="catering-topping-tag">{t}</span>)}
                        </div>
                      </div>
                    )}
                    {item.addon && <span className="catering-item-addon">{item.addon}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="catering-note">*Please inform us of any allergies or dietary restrictions. Gluten-free options available upon request.</p>
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
            {error && <p style={{ color: '#e74c3c', gridColumn: '1 / -1' }}>{error}</p>}
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
            <button type="submit" className="btn-solid" style={{ border: 'none', cursor: 'pointer', gridColumn: '1 / -1' }} disabled={sending}>
              {sending ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </section>

      <Footer />
    </>
  );
}
