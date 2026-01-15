export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eee", padding: "24px 20px" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <span>© {new Date().getFullYear()} NamaKamu</span>
        <span style={{ color: "#666" }}>Built with React + Vite</span>
      </div>
    </footer>
  );
}
