/**
 * @typedef {"Web Development" | "Data Analysis" | "Project Management"} Category
 *
 * @typedef {Object} Project
 * @property {Category} category
 * @property {string} title
 * @property {string} desc
 * @property {string[]} tags
 * @property {string} [link]
 * @property {string} [repo]
 */

const CATEGORY_ORDER = /** @type {Category[]} */ ([
  "Web Development",
  "Data Analysis",
  "Project Management",
]);

/** @type {Project[]} */
const projects = [
  /* =======================
     WEB DEVELOPMENT
  ======================= */
  {
    category: "Web Development",
    title: "Clust — Housing Management & Marketing Web App",
    desc: "Designed and developed a web-based property management and marketing application for Gading Serpong. Built system architecture & database design, developed front-end and back-end, and tested features for performance and UX.",
    tags: ["Web App", "Full-stack", "Architecture", "Database"],
    link: "https://example.com",
    repo: "https://github.com/",
  },
  {
    category: "Web Development",
    title: "BeraniBicara — Mental Health & Anti-Bullying Platform",
    desc: "Web platform with educational content, consultation, anonymous reporting, and storytelling forum. Contributed to UI/UX, built responsive front-end, and designed site architecture with focus on security and scalability.",
    tags: ["React", "UI/UX", "Responsive", "Security"],
    link: "https://example.com",
    repo: "https://github.com/",
  },

  /* =======================
     DATA ANALYSIS
  ======================= */
  {
    category: "Data Analysis",
    title: "Earthquake Hazard Prediction (Random Forest)",
    desc: "Built and evaluated a Random Forest model using DrivenData 'Richter’s Predictor' dataset. Performed preprocessing, EDA, feature engineering, and achieved 73% accuracy with key feature insights.",
    tags: ["Machine Learning", "Random Forest", "EDA", "Feature Eng"],
    link: "https://example.com",
    repo: "https://github.com/",
  },
  {
    category: "Data Analysis",
    title: "IDX Stock Price Analysis & Prediction",
    desc: "Analyzed stock price prediction on IDX using Simple/Multiple Linear Regression, Polynomial Regression, and Time Series methods. Evaluated models using MSE, MAE, and R² after cleaning and normalization.",
    tags: ["Python", "Regression", "Time Series", "Metrics"],
    link: "https://example.com",
    repo: "https://github.com/",
  },
  {
    category: "Data Analysis",
    title: "Medical Expenditure Prediction (Big Data Analytics)",
    desc: "Predictive analysis on health insurance dataset using linear regression. Conducted EDA and built interactive visual insights in SAS Visual Analytics to identify key drivers like age, smoking status, and BMI.",
    tags: ["Analytics", "Dashboard", "EDA", "Regression"],
    link: "https://example.com",
    repo: "https://github.com/",
  },

  /* =======================
     PROJECT MANAGEMENT
  ======================= */
  {
    category: "Project Management",
    title: "Minimart Cashier App (C# .NET + Crystal Reports)",
    desc: "Desktop cashier system with sales transactions, inventory management, automated billing, and daily reporting. Integrated Crystal Reports for structured report generation.",
    tags: ["C#", ".NET", "Desktop App", "Reporting"],
    link: "https://example.com",
    repo: "https://github.com/",
  },
];


export default function Projects() {
  /** @type {Record<Category, Project[]>} */
  const grouped = {
    "Web Development": [],
    "Data Analysis": [],
    "Project Management": [],
  };

  for (const p of projects) {
    grouped[p.category].push(p);
  }

  return (
    <section id="projects">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Projects</h2>

        {CATEGORY_ORDER.filter((c) => grouped[c].length > 0).map((category) => (
          <div key={category} style={{ marginBottom: 36 }}>
            <h3 style={{ margin: "0 0 14px" }}>{category}</h3>

            {/* Horizontal scroll row */}
            <div className="project-row" aria-label={`${category} projects`}>
              {grouped[category].map((p) => (
                <div key={`${p.category}-${p.title}`} className="card project-card">
                  <h4 style={{ marginTop: 0, marginBottom: 8 }}>{p.title}</h4>

                  <p style={{ color: "var(--color-muted)" }}>{p.desc}</p>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                    {p.tags.map((t) => (
                      <span key={`${p.title}-${t}`} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {p.link && (
                      <a className="btn primary" href={p.link} target="_blank" rel="noreferrer">
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
    </section>
  );
}
