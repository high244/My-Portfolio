export default function Navbar({ theme, onToggleTheme }) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (selector) => {
    if (selector === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div
        className="container navbar-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
        }}
      >
        {/* Brand (bukan link) */}
        <button
          onClick={() => scrollTo("#")}
          className="navbar-brand"
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Go to top"
        >
          Portfolio <span style={{ color: "var(--color-accent)" }}></span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Menu (bukan link) */}
          <nav className="navbar-menu" aria-label="Primary navigation">
            {links.map((l) => (
              <button
                key={l.href}
                className="navbar-item"
                onClick={() => scrollTo(l.href)}
                type="button"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Dark mode toggle */}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            type="button"
          >
            <span className="thumb">{theme === "dark" ? "🌙" : "☀️"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
