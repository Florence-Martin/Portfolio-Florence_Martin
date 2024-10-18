import React from "react";
import { Card } from "@/components/ui/card";

import { FileUser, DiamondPlus } from "lucide-react";
import { SideProjectCard } from "./SideProjectCard";

// Liste des projets secondaires
const SIDE_PROJECTS = [
  {
    Logo: FileUser,
    title: "CV_Florence_Martin",
    description: "Développeuse | UX/UI | CDA [Certification DevOps]",
    url: "https://cvflorence-martin.vercel.app/",
  },
  {
    Logo: DiamondPlus,
    title: "Tools For Web Development",
    description: `🚧 Ce site est en cours de développement.`,
    url: "https://github.com/Florence-Martin/tools-web-development",
  },
];

// Composant pour lister les projets
export const ProjectList = () => {
  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Mes projets</p>
      <div className="flex flex-col gap-4">
        {SIDE_PROJECTS.map((project) => (
          <SideProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Card>
  );
};
