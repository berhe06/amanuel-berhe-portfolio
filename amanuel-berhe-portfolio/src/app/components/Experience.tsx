import { motion } from "motion/react";

const roles = [
  {
    title: "Mechanical Engineer",
    company: "Clay & Bailey Manufacturing Co.",
    years: "Oct 2017 – Present",
    bullets: [
      "Lead DFMA initiatives for pressure vessels and safety products across full product lifecycle",
      "Co-invented patented overfill prevention valve (US20230025926A1) through iterative FEA and flow simulation",
      "Built and maintained SolidWorks simulation library covering static, fatigue, thermal, and flow scenarios",
    ],
  },
  {
    title: "Product Engineer",
    company: "Behlen Manufacturing Co.",
    years: "Oct 2015 – May 2017",
    bullets: [
      "Designed new product lines from concept to production using AutoCAD and SolidWorks",
      "Developed Excel VBA automation tools that reduced engineering effort per quote cycle",
      "Supported cross-functional teams through design reviews and manufacturing handoffs",
    ],
  },
  {
    title: "Mechanical Engineer Intern",
    company: "Haldex Traction",
    years: "May 2015 – Sep 2015",
    bullets: [
      "Redesigned brake product assembly line layout to improve throughput and ergonomics",
      "Conducted Cp/Cpk capability studies using Minitab to identify process bottlenecks",
      "Produced standardized work documentation adopted across the assembly floor",
    ],
  },
  {
    title: "Research Assistant",
    company: "University of Missouri–Kansas City",
    years: "Mar 2012 – May 2015",
    bullets: [
      "Conducted 3+ years of bone microstructure analysis for osteoporosis treatment research",
      "Used SEM and AFM microscopy to characterize material properties at the nanoscale",
      "Co-authored peer-reviewed publication (ScienceDirect)",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 24px", backgroundColor: "#0B0D10" }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#4F9CF9", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
            Career
          </p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 3vw, 32px)", fontWeight: 600, color: "#E6EAF0", margin: 0 }}>
            Experience
          </h2>
        </motion.div>

        <div className="flex flex-col" style={{ gap: 0 }}>
          {roles.map((r, i) => (
            <motion.div
              key={r.title + r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
              style={{
                padding: "32px 0",
                borderBottom: i < roles.length - 1 ? "1px solid #1F2933" : "none",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start" style={{ gap: 24 }}>
                <div className="flex-shrink-0" style={{ width: 280 }}>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: "#E6EAF0", margin: 0 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#9AA4AF", margin: "4px 0 0" }}>
                    {r.company}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#4F9CF9", margin: "4px 0 0", fontWeight: 500 }}>
                    {r.years}
                  </p>
                </div>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", flex: 1 }}>
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#9AA4AF", marginBottom: 10, gap: 10, lineHeight: 1.6 }}>
                      <span style={{ color: "#1F2933", marginTop: 4, fontSize: 8 }}>●</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
