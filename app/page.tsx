import BackToTopButton from "./components/BackButton";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { SkillList } from "./components/Skill/SkillList";
import { Spacing } from "./components/Spacing";
import { StatusSection } from "./components/StatusSection";
import { BddToolsCarousel } from "./components/Tool/BddToolsCarousel";
import { DesignToolsCarousel } from "./components/Tool/DesignToolsCarousel";
import { DevopsToolsCarousel } from "./components/Tool/DevopsToolsCarousel";
import { FrameworksToolsCarousel } from "./components/Tool/FrameworksToolsCarousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <StatusSection />
      <Spacing size="md" />
      <SkillList />
      <Spacing size="md" />
      <FrameworksToolsCarousel />
      <BddToolsCarousel />
      <DevopsToolsCarousel />
      <DesignToolsCarousel />
      <Spacing size="md" />
      <div>
        <BackToTopButton />
      </div>
      <Footer />
    </main>
  );
}
