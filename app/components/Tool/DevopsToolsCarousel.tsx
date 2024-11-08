import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "../Section";
import { DockerLogo } from "../icons/DockerLogo";
import { GitHubIcon } from "../icons/GitHubIcon";

const ToolsDevops = [
  {
    title: "GitHub Actions",
    description: <>Automatisation des workflows CI/CD.</>,
    imageLogo: <GitHubIcon size={60} />,
  },
  {
    title: "Docker",
    description: <>Conteneurisation d&apos;applications.</>,
    imageLogo: <DockerLogo size={60} />,
  },
  {
    title: "Docker Compose",
    description: <>Gestion de conteneurs multi-services.</>,
    imageLogo: <DockerLogo size={60} />,
  },
];

export const DevopsToolsCarousel = () => {
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Outils DevOps</p>

      {/* Conteneur de défilement horizontal avec accrochage */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 py-4">
        {ToolsDevops.map((tool, index) => (
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
