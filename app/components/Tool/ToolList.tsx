import { Code } from "../Code";
import { FigmaLogo } from "../icons/FigmaLogo";
import { Section } from "../Section";
import { ToolCard } from "./ToolCard";

const Tools = [
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

export const ToolList = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Maquettage</p>
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        {Tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </Section>
  );
};
