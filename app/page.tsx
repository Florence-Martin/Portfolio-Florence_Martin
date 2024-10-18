import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
    </main>
  );
}
