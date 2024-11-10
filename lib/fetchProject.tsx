import { FileUser, DiamondPlus, Code, Smartphone } from "lucide-react";

export async function FetchProject() {
  return [
    {
      Logo: FileUser,
      title: "CV_Florence_Martin",
      description: "Développeuse | UX/UI | CDA [Certification DevOps]",
      urlWebsite: "https://cvflorence-martin.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/CV-Florence_Martin",
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
      urlWebsite: "https://portfolio-florence-martin.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/Portfolio-Florence_Martin",
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
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/CDA_fil_rouge",
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
      description:
        "Projet réalisé pour l’obtention de la certification DevOps.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/simplo-cine",
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
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/AlertLyon",
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
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/tools-web-development",
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
}
