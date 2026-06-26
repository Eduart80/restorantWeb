import { useState, useEffect, useRef, useCallback } from 'react';

const photos = [
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=90', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=90', alt: 'Italian pasta dish' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=90', alt: 'Wood-fired pizza' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90', alt: 'Fine dining table' },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91798d792c?w=1200&q=90', alt: 'Fresh ingredients' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=90', alt: 'Gourmet dish' },
  { src: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1200&q=90', alt: 'Wine and pasta' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=90', alt: 'Fresh salad' },
];

const IDLE_CLOSE = 5000;

export default function Gallery() {
  const strip = [...photos, ...photos];

  const [lightbox, setLightbox] = useState(null); // index into photos[], or null
  const idleTimer = useRef(null);

  const resetIdle = useCallback(() => {
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setLightbox(null), IDLE_CLOSE);
  }, []);

  const open = useCallback((idx) => {
    setLightbox(idx % photos.length);
  }, []);

  const close = useCallback(() => {
    clearTimeout(idleTimer.current);
    setLightbox(null);
  }, []);

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + photos.length) % photos.length);
    resetIdle();
  }, [resetIdle]);

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % photos.length);
    resetIdle();
  }, [resetIdle]);

  // Start idle timer when lightbox opens
  useEffect(() => {
    if (lightbox !== null) resetIdle();
    return () => clearTimeout(idleTimer.current);
  }, [lightbox, resetIdle]);

  // Keyboard support
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next, close]);

  return (
    <section className="gallery-section" id="gallery">
      <span className="section-tag">Our Gallery</span>
      {/* <h2 className="section-title">Gallery</h2> */}
      <div className="section-line">
        <span></span>&#10022;<span></span>
      </div>

      <div className="gallery-track-wrap">
        <div className="gallery-fade gallery-fade-left" />

        <div className={`gallery-track${lightbox !== null ? ' gallery-track-paused' : ''}`}>
          {strip.map((photo, i) => (
            <div
              className="gallery-slide"
              key={i}
              onClick={() => open(i)}
              title="Click to enlarge"
            >
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

        <div className="gallery-fade gallery-fade-right" />
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lb-overlay" onClick={close}>
          <button
            className="lb-arrow lb-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >&#8592;</button>

          <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              className="lb-img"
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
            />
            <div className="lb-caption">{photos[lightbox].alt}</div>
            <div className="lb-dots">
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={`lb-dot${i === lightbox ? ' lb-dot-active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); resetIdle(); }}
                />
              ))}
            </div>
          </div>

          <button
            className="lb-arrow lb-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >&#8594;</button>

          <button className="lb-close" onClick={close} aria-label="Close">&#10005;</button>

          {/* idle progress bar */}
          <div key={lightbox} className="lb-idle-bar" />
        </div>
      )}
    </section>
  );
}
