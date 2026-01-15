const skills = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",

  // Backend & Database
  "PHP",
  "Laravel",
  "MySQL",
  "MongoDB",

  // Data & Analytics
  "Python",
  "Jupyter Notebook",
  "Power BI",
  "Tableau",
  "BigQuery",

  // Tools
  "Git",
  "GitHub",
  "Figma",
  "Canva",
];


export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 style={{ marginTop: 0 }}>Skills</h2>
        <div className="card">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {skills.map((s) => (
              <span key={s} className="skill-chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

