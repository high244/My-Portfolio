import profilePhoto from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section>
      <div className="container hero hero-layout">
        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-kicker">Hi, I’m</p>

          <h1 className="hero-title">
            Jonathan Sutandi
          </h1>

          <p className="hero-role">
            Information Systems Student • Web Developer (React/Vite) • UI/UX • Data Analyst
          </p>

          <p className="hero-desc">
            I’m an Information Systems student at Multimedia Nusantara University (UMN) seeking internship
            opportunities in web development. I enjoy building clean, responsive web applications and
            turning ideas into useful digital experiences through UI/UX and data-driven thinking.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">See Projects</a>

            <a className="icon-btn" href="#contact" aria-label="Contact" title="Contact">
              {/* Contact icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M6.5 7.5 12 12l5.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              className="icon-btn"
              href="https://github.com/high244"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              {/* GitHub */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2C6.477 2 2 6.596 2 12.267c0 4.53 2.865 8.378 6.839 9.735.5.096.684-.22.684-.49 0-.243-.009-.887-.014-1.74-2.782.62-3.37-1.37-3.37-1.37-.454-1.19-1.11-1.507-1.11-1.507-.907-.637.07-.624.07-.624 1.003.073 1.531 1.06 1.531 1.06.892 1.566 2.341 1.114 2.91.852.091-.665.35-1.114.636-1.37-2.22-.262-4.555-1.14-4.555-5.077 0-1.123.389-2.04 1.03-2.758-.104-.262-.446-1.316.098-2.743 0 0 .84-.276 2.75 1.053A9.26 9.26 0 0 1 12 7.31c.85.004 1.705.119 2.504.35 1.909-1.329 2.748-1.053 2.748-1.053.546 1.427.204 2.481.1 2.743.64.718 1.028 1.635 1.028 2.758 0 3.947-2.339 4.812-4.566 5.069.36.319.68.949.68 1.914 0 1.382-.013 2.496-.013 2.835 0 .272.18.59.688.489C19.137 20.64 22 16.793 22 12.267 22 6.596 17.523 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              className="icon-btn"
              href="https://linkedin.com/in/jonathansutandi"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              {/* LinkedIn */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4.5 4.5h15A2.5 2.5 0 0 1 22 7v10A2.5 2.5 0 0 1 19.5 19.5h-15A2.5 2.5 0 0 1 2 17V7A2.5 2.5 0 0 1 4.5 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  opacity="0.6"
                />
                <path d="M6.7 10.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6.7 7.6h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path
                  d="M10.3 17v-3.7c0-1.8 1.1-2.9 2.6-2.9 1.5 0 2.3 1 2.3 2.6V17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M10.3 10.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-photo-card">
            <img className="hero-photo" src={profilePhoto} alt="Jonathan Sutandi" />
          </div>
        </div>
      </div>
    </section>
  );
}
