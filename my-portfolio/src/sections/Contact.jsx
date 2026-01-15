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

            {/* WhatsApp */}
            <a
              className="icon-btn"
              href="https://wa.me/6282118996996"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 11.5c0 4.142-3.582 7.5-8 7.5a8.56 8.56 0 0 1-3.708-.83L4 19l1.02-3.53A7.215 7.215 0 0 1 4 11.5C4 7.358 7.582 4 12 4s8 3.358 8 7.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.2 9.2c.2-.6.3-.6.7-.6h.6c.2 0 .4 0 .5.3l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.2.4.2.6 0l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.3.3.3.5v.6c0 .4 0 .5-.6.7-.8.2-2.6.1-4.7-2-2.1-2.1-2.2-3.9-2-4.7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
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
