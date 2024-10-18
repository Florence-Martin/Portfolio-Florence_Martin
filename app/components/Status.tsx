import React from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { DiamondPlus, FileUser, LucideIcon } from "lucide-react";
import Link from "next/link";

// Composant principal de la section status
export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact</Card>
      </div>
    </Section>
  );
};

// Liste des projets secondaires
const SIDE_PROJECTS: SideProjectProps[] = [
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

// Interface pour typer les props des projets secondaires
interface SideProjectProps {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="text-accent-foreground bg-accent p-3 rounded-sm ">
        <props.Logo size={16} />
      </span>
      <p className="text-lg font-semibold">{props.title}</p>
      <p className="text-lg text-muted-foreground">{props.description}</p>
    </Link>
  );
};
