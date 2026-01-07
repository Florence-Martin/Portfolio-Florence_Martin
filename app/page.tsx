"use client";
import { useScroll, useSpring, motion } from "framer-motion";
import BackToTopButton from "./components/BackButton";
import { Hero } from "./components/Hero";
import { SkillList } from "./components/Skill/SkillList";
import { Spacing } from "./components/Spacing";
import { StatusSection } from "./components/StatusSection";
import { ToolList } from "./components/Tool/ToolList";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <main className="min-h-screen flex flex-col">
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

      <div className="border-t-8 border-[#4a90e2] px-8 bg-[#2d2f34] rounded-lg shadow-lg">
        <div className="sticky top-0 bg-[#2d2f34] z-10 w-full border-b-2 border-[#4a90e2] pb-2">
          <p className="text-white font-bold py-4">Outils & Méthodes</p>
          <p className="text-sm text-muted-foreground pb-2">
            Stack Product Owner Tech : pilotage, collaboration et delivery
          </p>
        </div>
        <ToolList />
        <BackToTopButton />
      </div>
    </main>
  );
}
