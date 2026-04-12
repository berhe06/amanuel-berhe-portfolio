export function Footer() {
  return (
    <footer
      style={{
        padding: "32px 24px",
        backgroundColor: "#0B0D10",
        borderTop: "1px solid #1F2933",
      }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row items-center justify-between"
        style={{ maxWidth: 1200, gap: 16 }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#9AA4AF" }}>
          Amanuel Berhe
        </span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#9AA4AF" }}>
          &copy; 2026. All rights reserved.
        </span>
        <div className="flex" style={{ gap: 24 }}>
          {["Projects", "Experience", "Contact"].map((l) => (
            <button
              key={l}
              onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#9AA4AF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6EAF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA4AF")}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
