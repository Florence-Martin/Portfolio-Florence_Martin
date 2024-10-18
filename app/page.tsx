import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
    </main>
  );
}
