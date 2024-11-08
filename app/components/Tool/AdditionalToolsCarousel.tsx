import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "../Section";
import { NotionLogo } from "../icons/NotionLogo";
import { WebstormLogo } from "../icons/WebstormLogo";
import { ModelisationLogo } from "../icons/ModelisationLogo";

const ToolsAdditional = [
  {
    title: "Notion",
    description: <>Prise de notes et gestion de projets.</>,
    imageLogo: <NotionLogo size={60} />,
  },
  {
    title: "WebStorm",
    description: <>Environnement de développement intégré pour JavaScript.</>,
    imageLogo: <WebstormLogo size={60} />,
  },
  {
    title: "StarUML",
    description: <>Outil de modélisation UML pour le développement logiciel.</>,
    imageLogo: <ModelisationLogo size={60} />,
  },
  {
    title: "Looping",
    description: <>Outil de modélisation pour la méthode Merise.</>,
    imageLogo: <ModelisationLogo size={60} />,
  },
  {
    title: "JMerise",
    description: <>Outil de modélisation pour la méthode Merise.</>,
    imageLogo: <ModelisationLogo size={60} />,
  },
];

export const AdditionalToolsCarousel = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Outils additionnels</p>

      {/* Conteneur de défilement horizontal avec accrochage */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 py-4">
        {ToolsAdditional.map((tool, index) => (
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
