import React from "react";
import { Card } from "@/components/ui/card";
import { FetchProject } from "@/lib/fetchProject";
import { SideProjectCard } from "./SideProjectCard";

// Composant pour lister les projets
export const ProjectList: React.FC = async () => {
  const projects = await FetchProject();

  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Mes projets</p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <SideProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Card>
  );
};
