import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 72,
        backgroundColor: scrolled ? "rgba(11,13,16,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1F2933" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex items-center justify-between h-full" style={{ maxWidth: 1200, padding: "0 24px" }}>
        <span
          className="cursor-pointer"
          style={{ color: "#E6EAF0", fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 700 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Amanuel Berhe
        </span>
        <div className="flex items-center" style={{ gap: 32 }}>
          {[
            { label: "Projects", id: "projects" },
            { label: "Experience", id: "experience" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ color: "#9AA4AF", fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6EAF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA4AF")}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#"
            className="no-underline transition-all duration-200"
            style={{
              color: "#E6EAF0",
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid #1F2933",
              backgroundColor: "rgba(31,41,51,0.5)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(31,41,51,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(31,41,51,0.5)")}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
