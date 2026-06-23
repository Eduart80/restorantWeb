export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div style={{ position: 'relative' }}>
          <div className="about-img"></div>
          <div className="about-img-border"></div>
        </div>
        <div className="about-text">
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">
            A Taste of Italy<br />in Every Bite
          </h2>
          <div className="section-line">
            <span></span>&#10022;<span></span>
          </div>
          <p>
            Mio Gusto offers authentic Italian cuisine in a warm, inviting setting where
            great food and atmosphere come together. Our full bar and European-inspired
            ambiance create the perfect backdrop for relaxed, enjoyable meals. From seafood
            dishes to flavorful chicken and classic Italian favorites, every plate reflects
            our passion for quality and tradition.
          </p>
          <p>
            Join us for a memorable dining experience filled with authentic flavors and
            heartfelt hospitality.
          </p>
          {/* <div className="about-stats">
            <div className="stat">
              <div className="stat-num">10+</div>
              <div className="stat-label">Years Open</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Menu Items</div>
            </div>
            <div className="stat">
              <div className="stat-num">4.8★</div>
              <div className="stat-label">Rating</div>
            </div>
          </div> */}
          <br />
        </div>
      </div>
    </section>
  );
}
