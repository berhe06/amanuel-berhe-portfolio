import { motion } from "motion/react";

const skills = [
  "SolidWorks", "AutoCAD", "Creo", "Inventor", "FEA", "CFD",
  "Flow Simulation", "DFMA", "CMM", "Minitab", "Cp / Cpk",
  "VBA", "Excel", "MATLAB", "3D Printing", "Metal Casting",
  "Rapid Prototyping", "SEM", "AFM", "Lean Manufacturing",
  "PDM", "Technical Documentation",
];

export function Skills() {
  return (
    <section style={{ padding: "80px 24px", backgroundColor: "#0B0D10" }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 40 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#4F9CF9", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
            Toolkit
          </p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 3vw, 32px)", fontWeight: 600, color: "#E6EAF0", margin: 0 }}>
            Skills & Tools
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-wrap"
          style={{ gap: 12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((s) => (
            <span
              key={s}
              className="transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#E6EAF0",
                padding: "8px 16px",
                borderRadius: 100,
                backgroundColor: "#11151A",
                border: "1px solid #1F2933",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4F9CF9";
                e.currentTarget.style.color = "#4F9CF9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1F2933";
                e.currentTarget.style.color = "#E6EAF0";
              }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
