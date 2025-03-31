import {
  FileUser,
  Code,
  Smartphone,
  Bitcoin,
  Heart,
  SquareLibrary,
  SquareKanban,
} from "lucide-react";

export async function FetchProject() {
  return [
    {
      Logo: SquareKanban,
      title: "PO - UX Dataviz",
      description:
        "Dashboard interactif pour Product Owner (PO), avec données Firebase. Le projet est entièrement testable en ligne !",
      urlWebsite: "https://po-ux-ui-data.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/PO-UX-UI-DATA",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Firebase",
        "Vercel",
      ],
      inProgress: true,
      isDemo: true,
    },
    {
      Logo: FileUser,
      title: "CV_Product Owner Tech",
      description: "Développeuse | UX/UI | CDA [Certification DevOps]",
      urlWebsite: "https://cv-fm-po-florencemartins-projects.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/CV-FM-PO",
      technologies: [
        "React.js",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
      ],
      inProgress: false,
      isDemo: false,
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
      isDemo: false,
    },

    {
      Logo: SquareLibrary,
      title: "UI Library",
      description: "Bibliothèque de composants UI",
      urlWebsite: "https://ui-library-navy.vercel.app/",
      urlGitHub: "https://github.com/Florence-Martin/UI-Library",
      technologies: [
        "Next.js",
        "TypeScript",
        "Next-themes",
        "TaiwindCSS",
        "Framer Motion",
        "Lucide Icon",
        "Vercel",
      ],
      inProgress: true,
      isDemo: true,
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
        "API Rest",
        "Storybook",
        "Tailwind CSS",
        "Shadcn/UI",
      ],
      inProgress: true,
      isDemo: false,
    },
    {
      Logo: FileUser,
      title: "CV_Développeuse-frontend",
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
      isDemo: false,
    },
    {
      Logo: Heart,
      title: "Reflexo Flow",
      description:
        "Site vitrine - Cabinet de réflexologie - Déployé avec nom de domaine.",
      urlWebsite: "https://www.reflexo-flow.fr/",
      urlGitHub: "https://github.com/Florence-Martin/reflexo_flow",
      technologies: [
        "React",
        "TaiwindCSS",
        "Framer Motion",
        "EmailJS",
        "Firebase",
        "Vercel",
      ],
      inProgress: false,
      isDemo: false,
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
      isDemo: false,
    },
    {
      Logo: Code,
      title: "Simplo-Cine",
      description: "Projet réalisé pour la certification DevOps.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/simplo-cine",
      technologies: ["Next.js", "TypeScript", "Docker", "Nginx"],
      inProgress: false,
      isDemo: false,
    },
    {
      Logo: Smartphone,
      title: "Alert-Lyon",
      description: "Alerte en temps réel des incidents à Lyon.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/AlertLyon",
      technologies: ["React Native", "Expo"],
      inProgress: false,
      isDemo: false,
    },
  ];
}
