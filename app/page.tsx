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
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <StatusSection />
      <Spacing size="sm" />
      <SkillList />
      <Spacing size="sm" />
      <div className="border-t-8 border-[#4a90e2] px-8  bg-[#2d2f34] rounded-lg shadow-lg max-h-96 overflow-y-scroll">
        <p className="text-white font-bold py-4 border-b-2 border-[#4a90e2] pb-2 sticky top-0 bg-[#2d2f34] z-10 w-full">
          Voici une liste des outils que j&apos;utilise :
        </p>
        <FrameworksToolsCarousel />
        <BddToolsCarousel />
        <DevopsToolsCarousel />
        <DesignToolsCarousel />
        <ProjectToolsCarousel />
        <AdditionalToolsCarousel />
        {/* </div>
      <Spacing size="md" />
      <div> */}
        <BackToTopButton />
      </div>
      <Footer />
    </main>
  );
}
