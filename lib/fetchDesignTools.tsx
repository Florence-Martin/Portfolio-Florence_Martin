import { FigmaLogo } from "@/app/components/icons/FigmaLogo";
import { IllustratorLogo } from "@/app/components/icons/IllustratorLogo";

export async function FetchDesignTools() {
  return [
    {
      title: "Figma",
      description: <>Wireframes, prototypage et collaboration UX.</>,
      imageLogo: <FigmaLogo size={60} />,
    },
    {
      title: "Illustrator",
      description: <>Création d&apos;icônes et assets vectoriels.</>,
      imageLogo: <IllustratorLogo size={60} />,
    },
  ];
}
