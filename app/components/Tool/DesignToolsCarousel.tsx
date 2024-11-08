import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "../Section";
import { FigmaLogo } from "../icons/FigmaLogo";
import { IllustratorLogo } from "../icons/IllustratorLogo";

const ToolsDesign = [
  {
    title: "Figma",
    description: <>Maquettage et Prototypage</>,
    imageLogo: <FigmaLogo size={60} />,
  },
  {
    title: "Illustrator",
    description: <>Dessin vectoriel</>,
    imageLogo: <IllustratorLogo size={60} />,
  },
];

export const DesignToolsCarousel = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Design</p>

      {/* Conteneur de défilement horizontal avec accrochage */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 py-4">
        {ToolsDesign.map((tool, index) => (
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