import { SkillCard } from "./SkillCard";
import { Code } from "../Code";
import { ReactLogo } from "../icons/ReactLogo";
import { FigmaLogo } from "../icons/FigmaLogo";
import { NextLogo } from "../icons/NextLogo";
import { TailwindLogo } from "../icons/TailwindLogo";
import { Section } from "../Section";
import { ShadcnLogo } from "../icons/ShadcnLogo";
import { Badge } from "@/components/ui/badge";

const SKILLS = [
  {
    title: "React",
    description: (
      <>
        Mon framework principal est <Code>React</Code> comme framework frontend.
      </>
    ),
    imageLogo: (
      <ReactLogo
        size={42}
        className="animate-spin"
        style={{ animationDuration: "10s" }}
      />
    ),
  },
  {
    title: "Next.js",
    description: (
      <>
        J&apos;utilise également <Code>Next.js</Code> comme framework backend et
        frontend.
      </>
    ),
    imageLogo: <NextLogo size={42} />,
  },
  {
    title: "Shadcn/UI",
    description: (
      <>
        J&apos;utilise <Code>Shadcn/UI</Code> pour des composants UI élégants et
        réutilisables.
      </>
    ),
    imageLogo: <ShadcnLogo size={42} />,
  },
  {
    title: "TailwindCSS",
    description: (
      <>
        Je peux créer de <u>belles</u> applications <i>rapidement</i> avec
        <Code>TailwindCSS</Code>.
      </>
    ),
    imageLogo: <TailwindLogo size={42} />,
  },
  {
    title: "Figma",
    description: (
      <>
        La phase de maquettage et prototypage est réalisée avec
        <Code>Figma</Code>.
      </>
    ),
    imageLogo: <FigmaLogo size={42} />,
  },
];

export const SkillList = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <div className="flex flex-col text-2xl font-bold text-muted-foreground">
        <Badge variant="outline">Skills</Badge>
        J&apos;aime travailler avec...
      </div>
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </Section>
  );
};
