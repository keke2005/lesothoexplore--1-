function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="shell footer-row">
        <a className="brand brand--footer" href="#/" aria-label="Lesotho Explore home">
          <span className="brand-mark">
            <img src="/attractions/hero-lesotho.jpg" alt="Lesotho flag" />
          </span>

          <span className="brand-copy">
            <strong>Lesotho</strong>
            <span>Explore</span>
          </span>
        </a>

        <p>For the curious, the kind, and the road-ready.</p>

        <div className="footer-links">
          <a href="#/attractions">Explore</a>
          <a href="#/culture">About Lesotho</a>
          <a href="#/enquire">Contact</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {year} Lesotho Explore</span>
        <span>Built as a tourism field guide</span>
      </div>
    </footer>
  )
}

export default Footer