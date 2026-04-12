import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Exploring } from "./components/Exploring";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "#0B0D10", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <Hero />
      <SocialProof />
      <Projects />
      <Experience />
      <Skills />
      <Exploring />
      <Contact />
      <Footer />
    </div>
  );
}
