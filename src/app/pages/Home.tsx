import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

type SectionId = "hero" | "about" | "skills" | "projects" | "contact";

const sectionOrder: SectionId[] = ["hero", "about", "skills", "projects", "contact"];

const getActiveSectionFromHash = (): SectionId => {
  const hash = window.location.hash.replace("#", "") as SectionId;
  return sectionOrder.includes(hash) ? hash : "hero";
};

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<SectionId>(() => getActiveSectionFromHash());

  React.useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "#hero";
    }

    const handleHashChange = () => {
      setActiveSection(getActiveSectionFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const sectionMap: Record<SectionId, React.ReactNode> = {
    hero: <HeroSection />,
    about: <AboutSection />,
    skills: <SkillsSection />,
    projects: <ProjectsSection />,
    contact: <ContactSection />,
  };

  return (
    <>
      {sectionMap[activeSection]}
      {activeSection !== "hero" ? <Footer /> : null}
    </>
  );
};

export default Home;
