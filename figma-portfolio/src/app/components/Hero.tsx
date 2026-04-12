import { motion } from "motion/react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100vh", padding: "120px 24px 80px", backgroundColor: "#0B0D10" }}
    >
      {/* Gradient blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          right: -100,
          top: "10%",
          background: "radial-gradient(circle, rgba(79,156,249,0.15) 0%, rgba(124,92,255,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="mx-auto flex flex-col md:flex-row items-center relative" style={{ maxWidth: 1200, gap: 64, width: "100%" }}>
        <motion.div
          className="flex-1 flex flex-col"
          style={{ gap: 24, maxWidth: 600 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center self-start"
            style={{
              padding: "6px 14px",
              borderRadius: 100,
              border: "1px solid #1F2933",
              backgroundColor: "rgba(31,41,51,0.4)",
              color: "#4F9CF9",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              gap: 6,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4F9CF9" }} />
            Open to opportunities
          </div>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 700,
              color: "#E6EAF0",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Mechanical Engineer driving{" "}
            <span style={{ color: "#4F9CF9" }}>full-cycle product</span> development
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: "#9AA4AF",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 540,
            }}
          >
            10+ years specializing in FEA, flow simulations, and DFMA — from concept through market launch. I apply a fail-fast approach using simulation and prototyping to surface issues early.
          </p>
          <div className="flex flex-wrap" style={{ gap: 16, marginTop: 8 }}>
            <button
              onClick={() => scrollTo("projects")}
              className="cursor-pointer border-none transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #4F9CF9, #7C5CFF)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="cursor-pointer transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#E6EAF0",
                padding: "14px 28px",
                borderRadius: 10,
                border: "1px solid #1F2933",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#4F9CF9")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1F2933")}
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            style={{
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(79,156,249,0.2), rgba(124,92,255,0.1) 50%, transparent 70%)",
              filter: "blur(40px)",
              position: "absolute",
            }}
          />
          <div
            style={{
              width: 320,
              height: 320,
              borderRadius: 24,
              border: "1px solid #1F2933",
              backgroundColor: "rgba(17,21,26,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>⚙️</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 700, color: "#E6EAF0", marginBottom: 8 }}>
                US Patent Granted
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#9AA4AF" }}>
                Overfill Prevention Valve
              </div>
              <div
                className="mt-4 inline-flex items-center"
                style={{
                  gap: 6,
                  padding: "6px 12px",
                  borderRadius: 100,
                  backgroundColor: "rgba(79,156,249,0.15)",
                  color: "#4F9CF9",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#22c55e" }} />
                US20230025926A1
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
