"use client";
import { useScroll, useSpring, motion } from "framer-motion";
import BackToTopButton from "./components/BackButton";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { SkillList } from "./components/Skill/SkillList";
import { Spacing } from "./components/Spacing";
import { StatusSection } from "./components/StatusSection";
import { AdditionalToolsCarousel } from "./components/Tool/AdditionalToolsCarousel";
import { BddToolsCarousel } from "./components/Tool/BddToolsCarousel";
import { DesignToolsCarousel } from "./components/Tool/DesignToolsCarousel";
import { DevopsToolsCarousel } from "./components/Tool/DevopsToolsCarousel";
import { FrameworksToolsCarousel } from "./components/Tool/FrameworksToolsCarousel";
import { ProjectToolsCarousel } from "./components/Tool/ProjectToolsCarousel";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <main>
      <Header />

      {/* Barre de progression verticale */}
      <motion.div
        style={{ scaleY }}
        className="fixed top-0 left-0 bottom-0 w-2 bg-[#4a90e2] z-60 origin-top"
      />

      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <StatusSection />
      <Spacing size="sm" />
      <SkillList />
      <Spacing size="sm" />

      <div className="border-t-8 border-[#4a90e2] px-8 bg-[#2d2f34] rounded-lg shadow-lg max-h-96 overflow-y-scroll">
        <p className="text-white font-bold py-4 border-b-2 border-[#4a90e2] pb-2 sticky top-0 bg-[#2d2f34] z-10 w-full">
          Voici une liste des outils que j&apos;utilise :
        </p>
        <FrameworksToolsCarousel />
        <BddToolsCarousel />
        <DevopsToolsCarousel />
        <DesignToolsCarousel />
        <ProjectToolsCarousel />
        <AdditionalToolsCarousel />
        <BackToTopButton />
      </div>
      <Footer />
    </main>
  );
}
