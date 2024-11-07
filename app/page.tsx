import BackToTopButton from "./components/BackButton";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { SkillList } from "./components/Skill/SkillList";
import { Spacing } from "./components/Spacing";
import { StatusSection } from "./components/StatusSection";
// import { ToolList } from "./components/Tool/ToolList";
import { ToolsCarousel } from "./components/Tool/ToolsCarousel";

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
      {/* <ToolList /> */}
      <ToolsCarousel />
      <Spacing size="md" />
      <div>
        <BackToTopButton />
      </div>
      <Footer />
    </main>
  );
}
