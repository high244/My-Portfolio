export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Contact</h2>

        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: 8 }}>Contact Me</h3>
          <p style={{ marginTop: 0, color: "var(--color-muted)" }}>
            I’m currently seeking internship opportunities. Feel free to reach out through any of the platforms below.
          </p>

          <div className="contact-icons">
            {/* Email */}
            <a
              className="icon-btn"
              href="mailto:jonathansutandi4@gmail.com"
              aria-label="Email"
              title="Email"
            >
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

            {/* LinkedIn */}
            <a
              className="icon-btn"
              href="https://linkedin.com/jonathansutandi"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.5 9.5V18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 6.8h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10.2 18v-4.7c0-2 1.2-3.2 2.9-3.2 1.6 0 2.4 1.1 2.4 2.8V18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.2 9.5V18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4.5 4.5h15A2.5 2.5 0 0 1 22 7v10A2.5 2.5 0 0 1 19.5 19.5h-15A2.5 2.5 0 0 1 2 17V7A2.5 2.5 0 0 1 4.5 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  opacity="0.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
