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

  link: "https://example.com",
  repo: "https://github.com/",
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
  {
    category: "Web Development",
    title: "BeraniBicara — Mental Health & Anti-Bullying Platform",
    desc: "Web platform with educational content, consultation, anonymous reporting, and a storytelling forum. Contributed to UI/UX and built responsive front-end.",
    tags: ["React", "UI/UX", "Responsive", "Security"],
    intro:
      "BeraniBicara provides educational content, consultation flow, anonymous reporting, and a storytelling forum. I contributed to UI/UX, implemented responsive UI components, and structured pages for scalability with a focus on safe user experience.",
    chips: ["React", "Vite", "UI/UX", "Responsive Design"],
    sections: [
      {
        title: "Highlights",
        items: [
          "Built responsive front-end components",
          "Contributed to UI/UX improvements for accessibility & clarity",
          { text: "Designed page structure to support scalability & security mindset", strong: true },
        ],
      },
    ],
    link: "https://example.com",
    repo: "https://github.com/",
    images: ["/projects/beranibicara/1.jpg", "/projects/beranibicara/2.jpg"],
  },

  // =======================
  // DATA ANALYSIS
  // =======================
  {
    category: "Data Analysis",
    title: "Spam Email Detection using Deep Learning",
    desc: "Built a spam email detection system by comparing deep learning architectures and evaluating performance on validation metrics.",
    tags: ["Deep Learning", "NLP", "Classification"],
    intro:
      "Developing a spam email detection system using Python by comparing 5 deep learning architectures: RNN, LSTM, BiLSTM, GRU, and CNN on the SpamAssassin Public Corpus dataset (86.5% spam, 13.5% ham).",
    chips: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
    sections: [
      {
        title: "Data Analysis",
        items: [
          "Exploratory data analysis with Python (Pandas, Matplotlib, Seaborn)",
          { text: "Identified feature correlation: text_length vs word_count = 0.975", strong: true },
          "Analysis of spam vs ham email distribution patterns",
        ],
      },
      {
        title: "Model Performance",
        items: [
          "Data preprocessing: encoding handling, text cleaning, tokenization, padding",
          "Train-test split 80:20 for consistent dataset",
          { text: "Best Models: BiLSTM and CNN", strong: true },
          { text: "Training accuracy: 99.64%", strong: true },
          { text: "Validation accuracy: >96%", strong: true },
          { text: "Validation loss: Stable <0.05", strong: true },
          "Outperformed RNN, LSTM, and GRU",
        ],
      },
    ],
    repo: "https://github.com/",
    images: ["/projects/spam/1.png", "/projects/spam/2.png"],
  },
  {
    category: "Data Analysis",
    title: "Earthquake Hazard Prediction (Random Forest)",
    desc: "Trained and evaluated a Random Forest model using DrivenData dataset. Performed preprocessing, EDA, feature engineering, and model evaluation.",
    tags: ["Machine Learning", "Random Forest", "EDA", "Feature Eng"],
    intro:
      "Built and evaluated a Random Forest model using DrivenData 'Richter’s Predictor' dataset. I cleaned data, performed EDA, created features, trained model, and analyzed feature importance to interpret drivers of damage grade.",
    chips: ["Python", "Pandas", "Scikit-learn", "EDA", "Feature Engineering"],
    sections: [
      {
        title: "Workflow",
        items: [
          "Preprocessing and missing value handling",
          "EDA and distribution analysis",
          { text: "Feature engineering + model training & validation", strong: true },
          "Interpretation using feature importance",
        ],
      },
    ],
    repo: "https://github.com/",
    images: ["/projects/earthquake/1.jpg", "/projects/earthquake/2.jpg"],
  },

  // =======================
  // PROJECT MANAGEMENT
  // =======================
  {
    category: "Project Management",
    title: "Minimart Cashier App (C# .NET + Crystal Reports)",
    desc: "Desktop cashier system with transactions, inventory, billing, and daily reporting. Integrated Crystal Reports for structured report generation.",
    tags: ["C#", ".NET", "Desktop App", "Reporting"],
    intro:
      "A desktop cashier application built with C# .NET for sales transactions, inventory management, automated billing, and daily reporting. Integrated Crystal Reports for printable reports and structured outputs.",
    chips: ["C#", ".NET", "Crystal Reports", "Desktop App"],
    sections: [
      {
        title: "Key Features",
        items: [
          "Sales transaction and receipt generation",
          "Inventory & product management",
          { text: "Automated billing and daily reporting (Crystal Reports)", strong: true },
        ],
      },
    ],
    link: "https://example.com",
    repo: "https://github.com/",
    images: ["/projects/minimart/1.jpg", "/projects/minimart/2.jpg"],
  },
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
            <div className="slider-frame">
              <img
                className="slider-img"
                src={withBase(images[index])}
                alt={`${project.title} screenshot ${index + 1}`}
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
              Live
            </a>
          )}
          {project.repo && (
            <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
              Repo
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
                      <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}

                    {p.repo && (
                      <a className="btn" href={p.repo} target="_blank" rel="noreferrer">
                        Repo
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
