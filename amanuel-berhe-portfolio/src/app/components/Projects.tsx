import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Overfill Prevention Valve",
    problem: "Energy sector required improved safety and reduced cost in overfill prevention systems.",
    solution: "Co-invented a next-generation overfill prevention valve through multiple FEA and flow simulation cycles, culminating in a granted US patent.",
    impact: ["US Patent granted (US20230025926A1)", "Improved safety margins over prior design", "Reduced manufacturing cost through DFMA"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["FEA", "SolidWorks", "Flow Sim", "DFMA"],
    link: "#",
  },
  {
    title: "Structural FEA & Flow Analysis Suite",
    problem: "Product validation required extensive physical prototyping, driving up cost and cycle time.",
    solution: "Built and maintained a library of SolidWorks simulation studies covering static, fatigue, thermal, and flow scenarios.",
    impact: ["Reduced physical prototype cycles", "Identified failure modes before tooling", "Standardized simulation workflow across product lines"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["SolidWorks", "FEA", "CFD", "PDM"],
    link: "#",
  },
  {
    title: "VBA Engineering Calculation Tools",
    problem: "Repetitive engineering calculations slowed quote cycles and introduced human error.",
    solution: "Developed a suite of Excel VBA programs to automate configuration and mechanical calculations.",
    impact: ["Reduced engineering effort per quote cycle", "Improved calculation accuracy", "Adopted across the product engineering team"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["VBA", "Excel", "Automation"],
    link: "#",
  },
  {
    title: "Assembly Line Layout Redesign",
    problem: "Material flow and ergonomic inefficiencies at the brake product assembly line limited throughput.",
    solution: "Redesigned the assembly line layout using capability studies to identify bottlenecks and standardize work.",
    impact: ["Improved material flow and ergonomics", "Standardized work documentation deployed", "Reduced operator motion waste"],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Minitab", "Lean Manufacturing", "AutoCAD"],
    link: "#",
  },
  {
    title: "Supplier Capability Study",
    problem: "Incoming brake component quality escapes required data-driven sourcing and inspection decisions.",
    solution: "Conducted Minitab-based Cp/Cpk capability studies with facility visits and CMM dimensional measurement.",
    impact: ["Reduced incoming quality escapes", "Quantified supplier performance for sourcing decisions", "CMM data integrated into acceptance criteria"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["CMM", "Minitab", "Cp/Cpk"],
    link: "#",
  },
  {
    title: "Osteoporosis Treatment Research",
    problem: "Gaps in understanding bone microstructure changes limited progress on osteoporosis treatment strategies.",
    solution: "Conducted three years of materials analysis using SEM and AFM microscopy to characterize bone properties at the nanoscale.",
    impact: ["Peer-reviewed publication (ScienceDirect)", "3+ years of materials characterization data", "Contributed to ongoing treatment research"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["SEM", "AFM", "Materials Science"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px", backgroundColor: "#0B0D10" }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#4F9CF9", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
            Case Studies
          </p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 3vw, 32px)", fontWeight: 600, color: "#E6EAF0", margin: 0 }}>
            Projects
          </h2>
        </motion.div>

        <div className="flex flex-col" style={{ gap: 48 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer transition-all duration-300 grid grid-cols-1 md:grid-cols-2"
              style={{
                backgroundColor: "#11151A",
                border: "1px solid #1F2933",
                borderRadius: 20,
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(79,156,249,0.08)";
                e.currentTarget.style.borderColor = "#2a3a4a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#1F2933";
              }}
            >
              <div style={{ padding: 32 }} className="flex flex-col justify-center">
                <div className="flex flex-wrap mb-3" style={{ gap: 8 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#4F9CF9",
                        padding: "4px 10px",
                        borderRadius: 6,
                        backgroundColor: "rgba(79,156,249,0.1)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 600, color: "#E6EAF0", margin: "0 0 16px" }}>
                  {p.title}
                </h3>
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#9AA4AF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Problem</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#9AA4AF", margin: 0, lineHeight: 1.6 }}>{p.problem}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#9AA4AF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Solution</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#9AA4AF", margin: 0, lineHeight: 1.6 }}>{p.solution}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#4F9CF9", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Impact</p>
                  <ul style={{ margin: 0, paddingLeft: 16, listStyle: "none" }}>
                    {p.impact.map((item) => (
                      <li key={item} className="flex items-start" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#E6EAF0", marginBottom: 6, gap: 8 }}>
                        <span style={{ color: "#4F9CF9", marginTop: 2 }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden" style={{ minHeight: 300 }}>
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.8 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #11151A, transparent 40%)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
