import { motion } from "motion/react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "4", label: "Companies" },
  { number: "1", label: "US Patent" },
  { number: "1", label: "Publication" },
];

export function SocialProof() {
  return (
    <section style={{ padding: "80px 24px", backgroundColor: "#0B0D10" }}>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: 1200, gap: 24 }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="transition-all duration-300"
            style={{
              backgroundColor: "#11151A",
              border: "1px solid #1F2933",
              borderRadius: 16,
              padding: 24,
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 40, fontWeight: 700, color: "#4F9CF9", lineHeight: 1 }}>
              {s.number}
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#9AA4AF", marginTop: 8 }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
