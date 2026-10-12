
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content shell">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">
            A field guide to the mountain kingdom
          </p>

          <h1>
            Find your <em>highland</em> story.
          </h1>

          <p className="hero-intro">
            From sandstone plateaus to village firesides, Lesotho is a place
            that asks you to slow down, look closer, and stay a little longer.
          </p>

          <div className="hero-actions">
            <a className="button button--coral" href="#/attractions">
              Start exploring <span aria-hidden="true">↗</span>
            </a>

            <a className="text-link text-link--light" href="#/culture">
              Why Lesotho? <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-note">
          <span className="hero-note__line" />
          <p>
            <strong>01 / 06</strong> South of the clouds
          </p>
        </div>
      </div>

      <div className="hero-bottom shell">
        <p>Known as the Kingdom in the Sky</p>

        <div className="hero-scroll">
          <span />
          Scroll to wander
        </div>
      </div>
    </section>
  )
}
