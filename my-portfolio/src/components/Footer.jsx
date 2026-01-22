export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" aria-label="Site footer">
      <style>{`
        .site-footer{
          border-top: 1px solid rgba(0,0,0,0.08);
          background:
            radial-gradient(1200px 400px at 20% -20%, rgba(99,102,241,0.10), transparent 60%),
            radial-gradient(900px 320px at 80% 0%, rgba(16,185,129,0.10), transparent 55%),
            linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
          padding: 28px 20px;
        }
        .footer-grid{
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 18px;
          align-items: start;
        }
        @media (max-width: 820px){
          .footer-grid{ grid-template-columns: 1fr; }
        }
        .footer-title{
          margin: 0 0 6px;
          font-weight: 700;
          letter-spacing: -0.2px;
        }
        .footer-muted{ color: var(--color-muted, #666); line-height: 1.7; margin: 0; }
        .footer-links{
          display: grid;
          gap: 10px;
          margin-top: 10px;
        }
        .footer-links a{
          color: inherit;
          text-decoration: none;
          opacity: .9;
        }
        .footer-links a:hover{ text-decoration: underline; opacity: 1; }
        .footer-pill{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 12px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          color: inherit;
          text-decoration: none;
        }
        .footer-pill:hover{ border-color: rgba(0,0,0,0.18); }
        .footer-bottom{
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px dashed rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          color: var(--color-muted, #666);
        }

        /* NEW: floating "back to top" arrow button */
        .to-top-fab{
          position: fixed;
          right: 18px;
          bottom: 18px;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.14);
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          display: grid;
          place-items: center;
          cursor: pointer;
          color: inherit;
          box-shadow:
            0 10px 25px rgba(0,0,0,0.10),
            0 2px 6px rgba(0,0,0,0.08);
          transition:
            transform .12s ease,
            border-color .12s ease,
            background .12s ease;
          z-index: 50;
        }
        .to-top-fab:hover{
          transform: translateY(-1px);
          border-color: rgba(0,0,0,0.24);
          background: rgba(255,255,255,0.9);
        }
        .to-top-fab:focus-visible{
          outline: 3px solid rgba(99,102,241,0.35);
          outline-offset: 2px;
        }
        .to-top-ico{ width: 18px; height: 18px; display: block; }

        /* FIX: ensure social icons are not huge (default svg size is 300x150) */
        .ico{
          width: 18px;
          height: 18px;
          display: block;
          flex: 0 0 auto;
        }
      `}</style>

      <div className="container footer-grid">
        <div>
          <h4 className="footer-title">Jonathan Sutandi</h4>
          <p className="footer-muted">
            Portfolio pribadi untuk menampilkan project, pengalaman, dan skill.
          </p>

          <div className="footer-links" aria-label="Quick links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Social</h4>
          <div className="footer-links" aria-label="Social links">
            <a className="footer-pill" href="https://github.com/high244" target="_blank" rel="noreferrer">
              <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.9 1.1.1-.8.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18.2 5 19.2 5.3 19.2 5.3c.7 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.3 5.9.5.4 1 1.2 1 2.5v3.7c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a className="footer-pill" href="https://www.linkedin.com/in/jonathansutandi/" target="_blank" rel="noreferrer">
              <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8.2H4.8V24H.2V8.2ZM8.2 8.2H12.6V10.4h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V24h-4.6v-7.73c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24H8.2V8.2Z"
                />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a className="footer-pill" href="mailto:jonathansutandi4@gmail.com">
              <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
                />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Info</h4>
          <p className="footer-muted">Built with React + Vite</p>
          <p className="footer-muted">Terakhir update: {year}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Jonathan Sutandi. All rights reserved.</span>
      </div>

      {/* NEW: floating arrow button on bottom-right */}
      <button className="to-top-fab" type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
        <svg className="to-top-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12 5l-7 7 1.4 1.4L11 8.8V20h2V8.8l4.6 4.6L19 12l-7-7z"
          />
        </svg>
      </button>
    </footer>
  );
}
