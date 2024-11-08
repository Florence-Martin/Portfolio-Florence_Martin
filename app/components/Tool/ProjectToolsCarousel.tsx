import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "../Section";
import { JiraLogo } from "../icons/JiraLogo";
import { ConfluenceLogo } from "../icons/ConfluenceLogo";
import { TrelloLogo } from "../icons/TrelloLogo";
import { ScrumLogo } from "../icons/ScrumLogo";

const ToolsProject = [
  {
    title: "Jira",
    description: <>Gestion de projets et de suivi des tâches.</>,
    imageLogo: <JiraLogo size={60} />,
  },
  {
    title: "Confluence",
    description: <>Documentation et collaboration d&apos;équipe.</>,
    imageLogo: <ConfluenceLogo size={60} />,
  },
  {
    title: "Trello",
    description: <>Gestion de projets basé sur des tableaux.</>,
    imageLogo: <TrelloLogo size={60} />,
  },
  {
    title: "Scrum",
    description: <>Méthodologie Agile.</>,
    imageLogo: <ScrumLogo size={60} />,
  },
];

export const ProjectToolsCarousel = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Gestion de projets</p>

      {/* Conteneur de défilement horizontal avec accrochage */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 py-4">
        {ToolsProject.map((tool, index) => (
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
