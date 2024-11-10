import { CSharpLogo } from "@/app/components/icons/CSharpLogo";
import { CssLogo } from "@/app/components/icons/CssLogo";
import { ExpressLogo } from "@/app/components/icons/ExpressLogo";
import { HtmlLogo } from "@/app/components/icons/HtmlLogo";
import { NextLogo } from "@/app/components/icons/NextLogo";
import { NodeLogo } from "@/app/components/icons/NodeLogo";
import { ReactLogo } from "@/app/components/icons/ReactLogo";
import { ShadcnLogo } from "@/app/components/icons/ShadcnLogo";
import { TailwindLogo } from "@/app/components/icons/TailwindLogo";
import { TypescriptLogo } from "@/app/components/icons/TypescriptLogo";

export async function FetchFramework() {
  return [
    {
      title: "React",
      description: <>Bibliothèque pour interfaces utilisateur dynamiques.</>,
      imageLogo: <ReactLogo size={60} />,
    },
    {
      title: "Next.js",
      description: <>Framework React pour le rendu côté serveur.</>,
      imageLogo: <NextLogo size={60} />,
    },
    {
      title: "TypeScript",
      description: <>Superset JavaScript avec typage statique.</>,
      imageLogo: <TypescriptLogo size={60} />,
    },
    {
      title: "C#",
      description: <>Langage orienté objet pour le développement .NET.</>,
      imageLogo: <CSharpLogo size={60} />,
    },
    {
      title: "React Native",
      description: <>Création d&apos;applications mobiles avec React.</>,
      imageLogo: <ReactLogo size={60} />,
    },
    {
      title: "Node.js",
      description: <>Exécution JavaScript côté serveur.</>,
      imageLogo: <NodeLogo size={60} />,
    },
    {
      title: "Express",
      description: <>Framework minimaliste pour Node.js.</>,
      imageLogo: <ExpressLogo size={60} />,
    },
    {
      title: "Tailwind CSS",
      description: <>Framework utilitaire pour le style rapide en CSS.</>,
      imageLogo: <TailwindLogo size={60} />,
    },
    {
      title: "Shadcn/UI",
      description: <>Composants UI pour React basés sur Radix.</>,
      imageLogo: <ShadcnLogo size={60} />,
    },
    {
      title: "HTML",
      description: <>HyperText Markup Language</>,
      imageLogo: <HtmlLogo size={60} />,
    },
    {
      title: "CSS / SCSS",
      description: <>Cascading Style Sheets | SCSS (préprocesseurs) </>,
      imageLogo: <CssLogo size={60} />,
    },
  ];
}
