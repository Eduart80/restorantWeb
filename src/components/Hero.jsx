export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-sub">Welcome to</div>
      <h1>Mio Gusto</h1>
      <p className="hero-tagline">Authentic Italian Cuisine · Frisco, TX</p>
      <div className="hero-divider">
        <span></span>&#10022;<span></span>
      </div>
      <div>
        <a href="#menu" className="btn-primary">View Menu</a>
        <a
          href="https://www.clover.com/online-ordering/mio-gusto-frisco"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid"
        >
          Order Online
        </a>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
