import { Link } from 'react-router-dom';

export default function ParallaxDivider() {
  return (
    <div className="parallax-divider">
      <span className="section-tag">Come &amp; Dine With Us</span>
      <h2>
        An Experience for<br />All the Senses
      </h2>
      <p>Open from Tuesday through Sunday</p>
      <Link to="/reservation" className="btn-primary">Make a Reservation</Link>
    </div>
  );
}
