import { FileUser, Code, Smartphone, Bitcoin } from "lucide-react";

export async function FetchProject() {
  return [
    {
      Logo: FileUser,
      title: "CV_Florence_Martin",
      description: "Développeuse | UX/UI | CDA [Certification DevOps]",
      urlWebsite: "https://cvflorence-martin.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/CV-Florence_Martin",
      technologies: [
        "Next.js",
        "TypeScript",
        "i18next",
        "Tailwind CSS",
        "Vercel",
      ],
      inProgress: false,
    },
    {
      Logo: FileUser,
      title: "Portfolio_Florence_Martin",
      description: "Développeuse | UX/UI | CDA [Certification DevOps]",
      urlWebsite: "https://portfolio-florence-martin.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/Portfolio-Florence_Martin",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Vercel",
      ],
      inProgress: false,
    },
    {
      Logo: Code,
      title: "CDA_fil_rouge",
      description:
        "Projet réalisé pour le titre de Concepteur et Développeur d'Applications.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/CDA_fil_rouge",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
      inProgress: false,
    },
    {
      Logo: Code,
      title: "Simplo-Cine",
      description: "Projet réalisé pour la certification DevOps.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/simplo-cine",
      technologies: ["Next.js", "TypeScript", "Docker", "Nginx"],
      inProgress: false,
    },
    {
      Logo: Smartphone,
      title: "Alert-Lyon",
      description: "Alerte en temps réel des incidents à Lyon.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/AlertLyon",
      technologies: ["React Native", "Expo"],
      inProgress: false,
    },
    {
      Logo: Bitcoin,
      title: "Crypto-Tracker",
      description:
        "Suivez les cours des cryptomonnaies et gérer de manière centralisée son wallet.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/Crypto-Tracker",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Storybook",
        "Tailwind CSS",
        "Shadcn/UI",
      ],
      inProgress: true,
    },
  ];
}
