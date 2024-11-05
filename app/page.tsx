import BackToTopButton from "./components/BackButton";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { SkillList } from "./components/Skill/SkillList";
import { Spacing } from "./components/Spacing";
import { StatusSection } from "./components/StatusSection";
import { ToolList } from "./components/Tool/ToolList";

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
      <ToolList />
      <Spacing size="md" />
      <BackToTopButton />
      <Footer />
    </main>
  );
}
