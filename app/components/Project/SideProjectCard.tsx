import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import PopoverProject from "../PopoverProject";

// Interface pour typer les props d'un projet secondaire
interface SideProjectProps {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  technologies?: {
    fullstack: string[];
    frontend: string[];
    backend: string[];
    bdd: string[];
    orm: string[];
    devops: string[];
    tools: string[];
  };
}

// Composant qui affiche une carte de projet secondaire
export const SideProjectCard = ({
  Logo,
  title,
  description,
  url,
  technologies,
}: SideProjectProps) => {
  return (
    <Card className="p-3 bg-accent/10 group hover:bg-slate-700 transition-colors  flex items-center gap-4">
      <Link
        href={url}
        className="inline-flex items-center gap-4 group-hover:bg-slate-700 transition-colors p-1 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-accent-foreground bg-accent p-3 rounded-sm">
          <Logo size={24} />
        </span>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </Link>
      <div className="ml-auto hidden md:block">
        <PopoverProject
          technologies={
            technologies || {
              fullstack: [],
              frontend: [],
              backend: [],
              bdd: [],
              orm: [],
              devops: [],
              tools: [],
            }
          }
        />
      </div>
    </Card>
  );
};
