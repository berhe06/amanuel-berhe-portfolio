import { motion } from "motion/react";
import { Mail, ExternalLink, GitBranch, FileText } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hello@amanuelberhe.com" },
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com/in/amanuelberhe" },
  { icon: GitBranch, label: "GitHub", href: "https://github.com/berhe06" },
  { icon: FileText, label: "US Patent", href: "https://patentimages.storage.googleapis.com/1b/65/47/20b79470a64d15/US20230025926A1.pdf" },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 24px", backgroundColor: "#0B0D10" }}>
      <motion.div
        className="mx-auto text-center"
        style={{ maxWidth: 600 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#E6EAF0", margin: "0 0 16px" }}>
          Let's build something impactful
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "#9AA4AF", margin: "0 0 40px", lineHeight: 1.7 }}>
          Open to product, engineering, and startup opportunities.
        </p>
        <div className="flex justify-center flex-wrap" style={{ gap: 16 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline flex items-center transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#E6EAF0",
                padding: "14px 24px",
                borderRadius: 10,
                border: "1px solid #1F2933",
                backgroundColor: "#11151A",
                gap: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4F9CF9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1F2933";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <l.icon size={18} />
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
