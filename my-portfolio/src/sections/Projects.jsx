import { useEffect, useState } from "react";

/**
 * @typedef {"Web Development" | "Data Analysis" | "Project Management"} Category
 *
 * @typedef {Object} ProjectItemObj
 * @property {string} text
 * @property {boolean} [strong]
 *
 * @typedef {Object} ProjectSection
 * @property {string} title
 * @property {(string | ProjectItemObj)[]} items
 *
 * @typedef {Object} Project
 * @property {Category} category
 * @property {string} title
 * @property {string} desc              // ringkas untuk card
 * @property {string[]} tags            // tag kecil di card
 * @property {string} [intro]           // paragraf pembuka di modal
 * @property {string[]} [chips]         // chip tech stack di modal
 * @property {ProjectSection[]} [sections] // section bullet di modal
 * @property {string} [link]
 * @property {string} [repo]
 * @property {string[]} [images]        // gambar/plot dokumentasi
 */

const CATEGORY_ORDER = /** @type {Category[]} */ ([
  "Web Development",
  "Data Analysis",
  "Project Management",
]);

/** @type {Project[]} */
const projects = [
  // =======================
  // WEB DEVELOPMENT
  // =======================
  {
    category: "Web Development",
    title: "Clust — Community Housing Management & Marketplace Web App",
    desc: "A full-stack web platform for residential communities to manage residents data, publish announcements, and run a local marketplace. Built responsive UI, backend APIs, database design, and admin dashboard features.",
    tags: ["Web App", "Full-stack", "Database Design", "Admin Dashboard", "Marketplace"],
    intro:
      "Clust is a web-based platform designed for housing communities to manage resident data and support local buying/selling activities through a built-in marketplace. I contributed to the architecture planning, database schema, UI development, and core features implementation, focusing on usability, maintainability, and performance.",

    chips: ["React", "Vite", "Node.js", "MySQL", "Git"],

    sections: [
      {
        title: "Problem",
        items: [
          "Resident data and community announcements were managed manually (chat groups / spreadsheets), causing information gaps and inefficiency",
          "Local buying/selling activities between residents had no structured platform",
          "Admins needed a centralized dashboard to manage users, products, and announcements",
        ],
      },
      {
        title: "Solution",
        items: [
          "Built a community web platform that integrates resident management, announcements, and a marketplace in one system",
          "Developed separate interfaces for Users and Admins for clearer access control and management flow",
          "Designed responsive UI for both desktop and mobile usage",
        ],
      },
      {
        title: "Key Features",
        items: [
          "User authentication: login & registration",
          "Marketplace listing: view, search, create, edit, and delete products",
          "Announcement system: residents can view updates posted by admin",
          "Profile management: update user information and password",
          "Admin dashboard: manage users, marketplace products, and announcements",
        ],
      },
      {
        title: "Technical Highlights",
        items: [
          "Designed database schema and implemented relational structure for users, marketplace, and announcements",
          "Implemented CRUD flows for products and announcements with validation",
          "Built admin dashboard tables with edit/delete actions and search support",
          { text: "Focused on clean code structure and maintainable components", strong: true },
        ],
      },
      {
        title: "Testing & Improvements",
        items: [
          "Performed UI testing for responsiveness across devices",
          "Validated form flows and user access control between admin/user roles",
          "Optimized page layout and component reusability for maintainability",
        ],
      },
    ],

    link: "https://drive.google.com/file/d/1VlhWXrDwnmEjNAoE4GjRESxUvtHY_wdB/view?usp=sharing",
    repo: "https://github.com/high244/Project-DWH-User",
    images: [
      "/projects/clust/1.jpg",
      "/projects/clust/2.png",
      "/projects/clust/3.png",
      "/projects/clust/4.png",
      "/projects/clust/5.png",
      "/projects/clust/6.png",
      "/projects/clust/7.png",
      "/projects/clust/8.png",
      "/projects/clust/9.png",
      "/projects/clust/10.png",
      "/projects/clust/11.png",
      "/projects/clust/12.png",
      "/projects/clust/13.png",
    ],
  }
  ,


  // =======================
  // DATA ANALYSIS
  // =======================
  {
    category: "Data Analysis",
    title: "IDX Stock Market Analysis",
    desc: "Processed and analyzed historical IDX stock data to uncover trends and pricing insights using regression techniques.",
    tags: ["Data Processing", "Regression", "Time Series"],
    intro:
      "Processed Indonesia Stock Exchange (IDX) stock price data (2000–2024) to extract meaningful insights and analyze price behavior.",
    chips: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    sections: [
      {
        title: "Data Processing",
        items: [
          "Cleaned and standardized historical stock price data",
          "Merged CSV and XLSX datasets to enrich company sector information",
          "Handled missing values and formatted time-series data",
          "Prepared features for regression and time series analysis"
        ],
      },
      {
        title: "Key Insights",
        items: [
          "Strong relationship identified between Open and Close prices",
          "Regression models achieved prediction error as low as 10% on selected stocks (BBCA)",
          "Linear regression effective for short-term price trend analysis",
          { text: "Time series analysis revealed long-term market trend patterns", strong: true }
        ],
      },
    ],
    repo: "https://github.com/high244/Data-Analysis",
    images: ["/projects/IDX/1.png", "/projects/IDX/2.png", "/projects/IDX/3.png", "/projects/IDX/4.png", "/projects/IDX/5.png", "/projects/IDX/6.png", "/projects/IDX/7.png", "/projects/IDX/8.png", "/projects/IDX/9.png"],
  }
  ,
  {
    category: "Data Analysis",
    title: "Earthquake Damage Prediction",
    desc: "Processed and modeled earthquake damage data using machine learning to identify high-risk building conditions.",
    tags: ["Data Processing", "Machine Learning", "Random Forest"],
    intro:
      "Processed historical earthquake damage data to predict building damage levels using Random Forest classification.",
    chips: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    sections: [
      {
        title: "Data Processing",
        items: [
          "Merged training features and labels using unique building ID",
          "Handled missing values and standardized numerical features",
          "Encoded categorical variables using Label Encoding",
          "Normalized data using StandardScaler for model readiness",
          "Split dataset into training and validation sets (80:20)"
        ],
      },
      {
        title: "Key Insights",
        items: [
          "Damage grade 2 (moderate damage) dominated the dataset distribution",
          "Building foundation type significantly influenced damage severity",
          "Agricultural-use buildings showed higher damage correlation (corr ≈ 0.74)",
          "Random Forest outperformed Gradient Boosting with ~73% accuracy",
          { text: "Structural features play a critical role in earthquake damage prediction", strong: true }
        ],
      },
    ],
    repo: "https://github.com/high244/Data-Modeling",
    images: [
      "/projects/Gempa/1.png",
      "/projects/Gempa/2.png",
      "/projects/Gempa/3.png",
      "/projects/Gempa/4.png",
      "/projects/Gempa/5.png",
      "/projects/Gempa/6.png",
    ],
  }
  ,


  // =======================
  // PROJECT MANAGEMENT
  // =======================
  {
  category: "Project Management",
  title: "Minimart Cashier App",
  desc: "Managed the development of a desktop cashier system covering sales, inventory, billing, and reporting with structured report delivery.",
  tags: ["Project Management", "System Development", "Reporting"],
  intro:
    "Led and managed the development of a desktop-based cashier application for a minimart. The project focused on streamlining transaction flow, inventory tracking, and daily reporting using Crystal Reports for structured outputs.",
  chips: ["Project Planning", "System Analysis", "C# .NET", "Crystal Reports"],
  sections: [
    {
      title: "Project Scope",
      items: [
        "Point-of-sale (POS) transaction workflow",
        "Inventory and product data management",
        "Automated billing and receipt generation",
        "Daily sales reporting using Crystal Reports"
      ],
    },
    {
      title: "Management Responsibilities",
      items: [
        "Defined project requirements and functional scope",
        "Planned development phases and task breakdown",
        "Coordinated system flow between cashier, inventory, and reporting modules",
        { text: "Ensured project delivery aligned with business needs", strong: true }
      ],
    },
    {
      title: "Key Outcomes",
      items: [
        "Improved transaction efficiency at cashier operations",
        "Reduced manual reporting through automated daily reports",
        "Enabled structured and printable reports for business monitoring",
        { text: "Delivered a functional desktop system ready for operational use", strong: true }
      ],
    },
  ],
  link: "https://example.com",
  repo: "https://github.com/high244/Project-VP",
  images: [
    "/projects/Kasir/1.png",
    "/projects/Kasir/2.png",
    "/projects/Kasir/2.png",
    "/projects/Kasir/4.png",
    "/projects/Kasir/5.png",
    "/projects/Kasir/6.png",
    "/projects/Kasir/7.png",
  ],
}
];

const withBase = (p) => {
  const base = import.meta.env.BASE_URL || "/";
  return base + String(p || "").replace(/^\//, "");
};

function ProjectModal({ open, project, onClose }) {
  const [index, setIndex] = useState(0);

  const images = project?.images || [];
  const hasImages = images.length > 0;

  // reset index saat ganti project / buka modal
  useEffect(() => {
    if (open) setIndex(0);
  }, [open, project?.title]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") hasImages && setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") hasImages && setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, hasImages, images.length]);

  // auto-fit frame aspect ratio based on current image
  useEffect(() => {
    if (!open || !hasImages) return;

    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      const w = img.naturalWidth || 16;
      const h = img.naturalHeight || 9;
      setFrameAspect(`${w} / ${h}`);
    };
    img.onerror = () => {
      if (cancelled) return;
      setFrameAspect("16 / 9");
    };

    img.src = withBase(images[index]);

    return () => {
      cancelled = true;
    };
  }, [open, hasImages, index, images]);

  if (!open || !project) return null;

  const prev = () => {
    if (!hasImages) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!hasImages) return;
    setIndex((i) => (i + 1) % images.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      onClick={handleBackdropClick}
    >
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close" type="button">
          ✕
        </button>

        {/* ====== Header content like screenshot ====== */}
        <div className="modal-head">
          <h3 style={{ margin: 0, fontSize: 28, letterSpacing: "-0.2px" }}>
            {project.title}
          </h3>

          {project.chips?.length > 0 && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              {project.chips.map((c) => (
                <span key={c} className="pill-chip">
                  {c}
                </span>
              ))}
            </div>
          )}

          {(project.intro || project.desc) && (
            <p style={{ margin: "14px 0 0", color: "var(--color-muted)", lineHeight: 1.75 }}>
              {project.intro || project.desc}
            </p>
          )}
        </div>

        {/* ====== Slider (documentation) ====== */}
        {hasImages && (
          <div className="slider" style={{ marginTop: 16 }}>
            <div
              className="slider-frame"
              style={{
                width: "100%",
                height: "clamp(220px, 60vh, 520px)", // fixed safe frame height
                overflow: "hidden",
                borderRadius: 12,
                background: "rgba(0,0,0,0.06)",
                display: "grid",
                placeItems: "center",
                padding: 10, // small gutter so images never feel “too big"
              }}
            >
              <img
                // remove className to avoid external CSS overriding sizing/object-fit
                src={withBase(images[index])}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                decoding="async"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>

            <div className="slider-controls">
              <button className="btn" onClick={prev} type="button">
                Prev
              </button>

              <div className="slider-dots" aria-label="Image navigation">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === index ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    type="button"
                  />
                ))}
              </div>

              <button className="btn" onClick={next} type="button">
                Next
              </button>
            </div>
          </div>
        )}

        {/* ====== Sections: Data Analysis / Model Performance ====== */}
        {project.sections?.length > 0 && (
          <div style={{ marginTop: 18, display: "grid", gap: 16 }}>
            {project.sections.map((sec) => (
              <div key={sec.title}>
                <h4 style={{ margin: "0 0 10px", fontSize: 16 }}>{sec.title}:</h4>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    color: "var(--color-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {sec.items.map((it, idx) => {
                    const obj = typeof it === "string" ? { text: it } : it;
                    return (
                      <li key={`${sec.title}-${idx}`} style={{ marginBottom: 8 }}>
                        {obj.strong ? (
                          <strong style={{ color: "var(--color-text)" }}>{obj.text}</strong>
                        ) : (
                          obj.text
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* ====== Actions ====== */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          {project.link && (
            <a className="btn primary" href={project.link} target="_blank" rel="noreferrer">
              Gdrive
            </a>
          )}
          {project.repo && (
            <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  /** @type {[Project|null, Function]} */
  const [selected, setSelected] = useState(null);

  /** @type {Record<Category, Project[]>} */
  const grouped = {
    "Web Development": [],
    "Data Analysis": [],
    "Project Management": [],
  };

  for (const p of projects) grouped[p.category].push(p);

  const openModal = (p) => {
    setSelected(p);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };
  // taruh di atas (mis. sebelum ProjectModal)
  function GithubIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
        <path
          fill="currentColor"
          d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.9 1.1.1-.8.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18.2 5 19.2 5.3 19.2 5.3c.7 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.3 5.9.5.4 1 1.2 1 2.5v3.7c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
        />
      </svg>
    );
  }

  function DriveIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
        <path fill="currentColor" d="M8.7 3.2h6.6l5 8.7-3.3 5.7H6.3L3 11.9l5.7-8.7zm1.1 2-4.4 6.7h13.2l-4-6.7H9.8zm-3.4 8.7 2.6 4.5h7.9l2.6-4.5H6.4z" />
      </svg>
    );
  }
  return (
    <section id="projects">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Projects</h2>

        {CATEGORY_ORDER.filter((c) => grouped[c].length > 0).map((category) => (
          <div key={category} style={{ marginBottom: 36 }}>
            <h3 style={{ margin: "0 0 14px" }}>{category}</h3>

            <div className="project-row" aria-label={`${category} projects`}>
              {grouped[category].map((p) => (
                <div key={`${p.category}-${p.title}`} className="card project-card project-card-flex">
                  <h4 style={{ marginTop: 0, marginBottom: 8 }}>{p.title}</h4>

                  <p style={{ color: "var(--color-muted)", margin: 0 }}>{p.desc}</p>

                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                      marginTop: 12,
                      marginBottom: 12,
                    }}
                  >
                    {p.tags.map((t) => (
                      <span key={`${p.title}-${t}`} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button className="btn primary" onClick={() => openModal(p)} type="button">
                      View More
                    </button>

                    {p.link && (
                      <a
                        className="icon-btn sm"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Google Drive"
                        title="Google Drive"
                      >
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M8.7 3.2h6.6l5 8.7-3.3 5.7H6.3L3 11.9l5.7-8.7Z"
                            fill="currentColor"
                          />
                          <path d="M9.8 5.2 5.4 11.9h13.2l-4-6.7H9.8Z" fill="var(--color-bg)" opacity="0.12" />
                          <path d="M6.4 13.9 9 18.4h7.9l2.6-4.5H6.4Z" fill="var(--color-bg)" opacity="0.12" />
                        </svg>
                        <span className="sr-only"></span>
                      </a>
                    )}

                    {p.repo && (
                      <a
                        className="icon-btn sm"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                      >
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 2C6.477 2 2 6.596 2 12.267c0 4.53 2.865 8.378 6.839 9.735.5.096.684-.22.684-.49 0-.243-.009-.887-.014-1.74-2.782.62-3.37-1.37-3.37-1.37-.454-1.19-1.11-1.507-1.11-1.507-.907-.637.07-.624.07-.624 1.003.073 1.531 1.06 1.531 1.06.892 1.566 2.341 1.114 2.91.852.091-.665.35-1.114.636-1.37-2.22-.262-4.555-1.14-4.555-5.077 0-1.123.389-2.04 1.03-2.758-.104-.262-.446-1.316.098-2.743 0 0 .84-.276 2.75 1.053A9.26 9.26 0 0 1 12 7.31c.85.004 1.705.119 2.504.35 1.909-1.329 2.748-1.053 2.748-1.053.546 1.427.204 2.481.1 2.743.64.718 1.028 1.635 1.028 2.758 0 3.947-2.339 4.812-4.566 5.069.36.319.68.949.68 1.914 0 1.382-.013 2.496-.013 2.835 0 .272.18.59.688.489C19.137 20.64 22 16.793 22 12.267 22 6.596 17.523 2 12 2Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="sr-only"></span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal open={open} project={selected} onClose={closeModal} />
    </section>
  );
}
