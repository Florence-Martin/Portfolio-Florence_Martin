import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "../Section";
import { HtmlLogo } from "../icons/HtmlLogo";
import { CssLogo } from "../icons/CssLogo";
import { ReactLogo } from "../icons/ReactLogo";
import { NextLogo } from "../icons/NextLogo";
import { TypescriptLogo } from "../icons/TypescriptLogo";
import { NodeLogo } from "../icons/NodeLogo";
import { TailwindLogo } from "../icons/TailwindLogo";
import { ExpressLogo } from "../icons/ExpressLogo";
import { ShadcnLogo } from "../icons/ShadcnLogo";
import { CSharpLogo } from "../icons/CSharpLogo";

const ToolsFramework = [
  {
    title: "React",
    description: <>Bibliothèque pour interfaces utilisateur dynamiques.</>,
    imageLogo: <ReactLogo size={60} />,
  },
  {
    title: "Next.js",
    description: <>Framework React pour le rendu côté serveur.</>,
    imageLogo: <NextLogo size={60} />,
  },
  {
    title: "TypeScript",
    description: <>Superset JavaScript avec typage statique.</>,
    imageLogo: <TypescriptLogo size={60} />,
  },
  {
    title: "C#",
    description: <>Langage orienté objet pour le développement .NET.</>,
    imageLogo: <CSharpLogo size={60} />,
  },
  {
    title: "React Native",
    description: <>Création d&apos;applications mobiles avec React.</>,
    imageLogo: <ReactLogo size={60} />,
  },
  {
    title: "Node.js",
    description: <>Exécution JavaScript côté serveur.</>,
    imageLogo: <NodeLogo size={60} />,
  },
  {
    title: "Express",
    description: <>Framework minimaliste pour Node.js.</>,
    imageLogo: <ExpressLogo size={60} />,
  },
  {
    title: "Tailwind CSS",
    description: <>Framework utilitaire pour le style rapide en CSS.</>,
    imageLogo: <TailwindLogo size={60} />,
  },
  {
    title: "Shadcn/UI",
    description: <>Composants UI pour React basés sur Radix.</>,
    imageLogo: <ShadcnLogo size={60} />,
  },
  {
    title: "HTML",
    description: <>HyperText Markup Language</>,
    imageLogo: <HtmlLogo size={60} />,
  },
  {
    title: "CSS / SCSS",
    description: <>Cascading Style Sheets | SCSS (préprocesseurs) </>,
    imageLogo: <CssLogo size={60} />,
  },
];

export const FrameworksToolsCarousel = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Librairies et Frameworks</p>

      {/* Conteneur de défilement horizontal avec accrochage */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 py-4">
        {ToolsFramework.map((tool, index) => (
          <div key={index} className="snap-center flex-shrink-0 w-64">
            <Card className="w-full h-full">
              <CardContent className="flex items-center justify-center p-6">
                <div className="flex flex-col items-center gap-6">
                  {tool.imageLogo}
                  <span className="text-3xl font-semibold">{tool.title}</span>
                  <p>{tool.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};
