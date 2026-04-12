import { motion } from "motion/react";
import { Sparkles, TrendingUp, Code2 } from "lucide-react";

const items = [
  { icon: Sparkles, title: "AI Agents", desc: "Building with CrewAI and exploring autonomous workflows" },
  { icon: TrendingUp, title: "Consumer App Growth", desc: "Retention loops, onboarding funnels, and growth tactics" },
  { icon: Code2, title: "Product-Led Engineering", desc: "Shipping fast, measuring impact, iterating with users" },
];

export function Exploring() {
  return (
    <section style={{ padding: "80px 24px", backgroundColor: "#0B0D10" }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 40 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#7C5CFF", textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
            Currently
          </p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 3vw, 32px)", fontWeight: 600, color: "#E6EAF0", margin: 0 }}>
            What I'm Exploring
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="transition-all duration-300"
              style={{
                backgroundColor: "#11151A",
                border: "1px solid #1F2933",
                borderRadius: 16,
                padding: 28,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7C5CFF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1F2933";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <item.icon size={24} style={{ color: "#7C5CFF", marginBottom: 16 }} />
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: "#E6EAF0", margin: "0 0 8px" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#9AA4AF", margin: 0, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
