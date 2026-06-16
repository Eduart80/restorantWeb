const specials = [
  {
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    tag: 'Starter',
    name: 'Burrata & Prosciutto',
    desc: 'Fresh burrata, aged prosciutto, heirloom tomatoes, basil oil',
    price: '$16',
  },
  {
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80',
    tag: 'Main Course',
    name: 'Tagliatelle al Ragù',
    desc: 'Hand-rolled pasta, slow-cooked Bolognese, Parmigiano Reggiano',
    price: '$24',
  },
  {
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    tag: 'Dessert',
    name: 'Classic Tiramisù',
    desc: 'Savoiardi, mascarpone cream, espresso, dusted with cocoa',
    price: '$11',
  },
  {
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
    tag: 'Drink',
    name: 'Aperol Spritz',
    desc: 'Aperol, Prosecco, soda water, fresh orange slice',
    price: '$13',
  },
];

export default function Specials() {
  return (
    <section className="specials" id="specials" style={{ padding: '80px 0' }}>
      <span className="section-tag">Chef&apos;s Selection</span>
      <h2 className="section-title">Today&apos;s Specials</h2>
      <div className="section-line">
        <span></span>&#10022;<span></span>
      </div>
      <p className="section-desc">
        Handpicked by our chef every day using the freshest seasonal ingredients.
      </p>
      <div className="specials-grid">
        {specials.map((item) => (
          <div className="special-card" key={item.name}>
            <div
              className="card-img"
              style={{ background: `url('${item.img}') center/cover` }}
            ></div>
            <div className="card-overlay">
              <div className="card-tag">{item.tag}</div>
              <div className="card-name">{item.name}</div>
              <div className="card-desc">{item.desc}</div>
              <div className="card-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
