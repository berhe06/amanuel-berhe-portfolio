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
        <div className="flex flex-wrap items-center" style={{ gap: 24 }}>
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
          <span style={{ color: "#1F2933" }}>|</span>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/amanuelberhe" },
            { label: "GitHub", href: "https://github.com/berhe06" },
            { label: "Patent", href: "https://patentimages.storage.googleapis.com/1b/65/47/20b79470a64d15/US20230025926A1.pdf" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#9AA4AF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6EAF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA4AF")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
