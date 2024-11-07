import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import PopoverProject from "../PopoverProject";
import { Button } from "@/components/ui/button";

// Interface pour typer les props d'un projet secondaire
interface SideProjectProps {
  Logo: LucideIcon;
  title: string;
  description: string;
  urlWebsite: string;
  urlGitHub: string;
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
  urlWebsite,
  urlGitHub,
  technologies,
}: SideProjectProps) => {
  return (
    <Card className="p-3 bg-accent/10 group hover:bg-slate-700 transition-colors flex items-center gap-4">
      <span className="text-accent-foreground bg-accent p-3 rounded-sm">
        <Logo size={24} />
      </span>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg text-muted-foreground">{description}</p>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Link href={urlWebsite} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Screens</Button>
          </Link>
          <Link href={urlGitHub} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </Link>
        </div>
      </div>
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
