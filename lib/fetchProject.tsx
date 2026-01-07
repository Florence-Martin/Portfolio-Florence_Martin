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
      title: "PO-UX-UI-Data Dashboard",
      role: "Product Owner · UX/UI · Front-end",
      description:
        "Cockpit produit pour Product Owner : structuration des user stories, backlog, sprints et indicateurs UX/Data. Conçu comme un outil opérationnel de cadrage, pilotage et delivery, entièrement testable en ligne.",
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
      featured: true,
    },
    {
      Logo: FileUser,
      title: "CV_Product Owner Tech",
      description:
        "CV interactif orienté Product Owner Tech, mettant en avant la coordination produit, l’UX/UI et la compréhension technique au service de la delivery.",
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
      description:
        "Portfolio professionnel présentant mon positionnement Product Owner Tech, mes projets produit et ma double compétence UX/UI & front-end.",
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
      role: "Design System · Architecture · Front-end",
      description:
        "Design system et bibliothèque de composants UI visant la cohérence produit, la réutilisabilité et l’accélération de la delivery front-end.",
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
      featured: true,
    },
    {
      Logo: Bitcoin,
      title: "Crypto-Tracker",
      description:
        "Application de suivi des cryptomonnaies axée sur la centralisation des données, la lisibilité des informations clés et l’expérimentation de flux data.",
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
      description:
        "CV technique orienté front-end, valorisant l’UX/UI, la qualité d’implémentation et les bases DevOps acquises.",
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
      role: "Freelance · Discovery · UX/UI · Delivery",
      description:
        "Projet freelance de bout en bout : discovery avec le client, conception UX/UI, développement et mise en production d’un site vitrine avec nom de domaine.",
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
      featured: true,
    },
    {
      Logo: Code,
      title: "CDA_fil_rouge",
      description:
        "Projet fil rouge de formation, intégrant analyse des besoins, modélisation fonctionnelle et développement d’une application complète.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/CDA_fil_rouge",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
      inProgress: false,
      isDemo: false,
    },
    {
      Logo: Code,
      title: "Simplo-Cine",
      description:
        "Projet réalisé dans le cadre de la certification DevOps, avec focus sur le déploiement, la conteneurisation et l’industrialisation.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/simplo-cine",
      technologies: ["Next.js", "TypeScript", "Docker", "Nginx"],
      inProgress: false,
      isDemo: false,
    },
    {
      Logo: Smartphone,
      title: "Alert-Lyon",
      description:
        "Application mobile de signalement et d’alerte en temps réel, centrée sur la rapidité d’accès à l’information locale.",
      urlWebsite: "",
      urlGitHub: "https://github.com/Florence-Martin/AlertLyon",
      technologies: ["React Native", "Expo"],
      inProgress: false,
      isDemo: false,
    },
  ];
}
