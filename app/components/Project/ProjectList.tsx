import React from "react";
import { Card } from "@/components/ui/card";

import { FileUser, DiamondPlus, Code, Smartphone } from "lucide-react";
import { SideProjectCard } from "./SideProjectCard";

// Liste des projets secondaires
const SIDE_PROJECTS = [
  {
    Logo: FileUser,
    title: "CV_Florence_Martin",
    description: "Développeuse | UX/UI | CDA [Certification DevOps]",
    url: "https://cvflorence-martin.vercel.app/",
    technologies: {
      fullstack: ["Next.js"],
      frontend: ["TypeScript", "Tailwind CSS"],
      backend: [],
      bdd: [],
      orm: [],
      devops: ["Vercel"],
      tools: [],
    },
  },
  {
    Logo: FileUser,
    title: "Portfolio_Florence_Martin",
    description: "Développeuse | UX/UI | CDA [Certification DevOps]",
    url: "https://portfolio-florence-martin.vercel.app/",
    technologies: {
      fullstack: ["Next.js"],
      frontend: ["TypeScript", "Tailwind CSS", "Shadcn/UI"],
      backend: [],
      bdd: [],
      orm: [],
      devops: ["Vercel"],
      tools: [],
    },
  },
  {
    Logo: Code,
    title: "CDA_fil_rouge",
    description:
      "Projet réalisé pour l’obtention du titre de Concepteur et Développeur d’Applications.",
    url: "https://github.com/Florence-Martin/CDA_fil_rouge",
    technologies: {
      fullstack: ["Next.js"],
      frontend: ["TypeScript", "Tailwind CSS"],
      backend: [],
      bdd: ["PostgreSQL"],
      orm: ["TypeORM"],
      devops: ["Docker"],
      tools: [],
    },
  },
  {
    Logo: Code,
    title: "Simplo-Cine",
    description: "Projet réalisé pour l’obtention de la certification DevOps.",
    url: "https://github.com/Florence-Martin/simplo-cine",
    technologies: {
      fullstack: ["Next.js"],
      frontend: ["TypeScript", "Tailwind CSS"],
      backend: [],
      bdd: ["PostgreSQL"],
      orm: ["Sequelize"],
      devops: ["Docker", "Nginx"],
      tools: [
        "ESLint, SonarCloud et Husky",
        "GitHub Actions",
        "Prometheus et Grafana",
      ],
    },
  },
  {
    Logo: Smartphone,
    title: "Alert-Lyon",
    description:
      "Alerte en temps réel des accidents ou problèmes de voirie à Lyon, d'un mobile avec photo.",
    url: "https://github.com/Florence-Martin/AlertLyon",
    technologies: {
      fullstack: [],
      frontend: ["React Native"],
      backend: [],
      bdd: [],
      orm: [],
      devops: [],
      tools: ["Expo"],
    },
  },
  {
    Logo: DiamondPlus,
    title: "Tools For Web Development",
    description: `🚧 Ce site est en cours de développement.`,
    url: "https://github.com/Florence-Martin/tools-web-development",
    technologies: {
      fullstack: ["Next.js"],
      frontend: ["Tailwind CSS"],
      backend: ["Node/Express"],
      bdd: ["MongoDB"],
      orm: [],
      devops: [],
      tools: [],
    },
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
