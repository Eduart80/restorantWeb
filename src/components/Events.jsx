const events = [
  {
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    date: 'Saturday, June 14 · 7:00 PM',
    name: 'Wine & Pasta Night',
    desc: 'A curated evening pairing handmade pastas with our finest Italian wines. Limited seats available.',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    date: 'Friday, June 20 · 6:30 PM',
    name: "Chef's Table Experience",
    desc: 'An intimate 7-course tasting menu prepared tableside by our executive chef.',
  },
  {
    img: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80',
    date: 'Sunday, June 22 · 12:00 PM',
    name: 'Sunday Family Brunch',
    desc: 'An Italian-style brunch with live music, bottomless mimosas, and a special kids menu.',
  },
];

export default function Events() {
  return (
    <section className="events" id="events">
      <span className="section-tag">What&apos;s On</span>
      <h2 className="section-title">Upcoming Events</h2>
      <div className="section-line">
        <span></span>&#10022;<span></span>
      </div>
      <p className="section-desc">
        Join us for special evenings, tastings, and celebrations throughout the year.
      </p>
      <div className="events-grid">
        {events.map((ev) => (
          <div className="event-card" key={ev.name}>
            <div
              className="event-img"
              style={{ background: `url('${ev.img}') center/cover` }}
            ></div>
            <div className="event-body">
              <div className="event-date">{ev.date}</div>
              <div className="event-name">{ev.name}</div>
              <div className="event-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
