import { FigmaLogo } from "@/app/components/icons/FigmaLogo";
import { IllustratorLogo } from "@/app/components/icons/IllustratorLogo";

export async function FetchDesignTools() {
  return [
    {
      title: "Figma",
      description: <>Maquettage et Prototypage</>,
      imageLogo: <FigmaLogo size={60} />,
    },
    {
      title: "Illustrator",
      description: <>Dessin vectoriel</>,
      imageLogo: <IllustratorLogo size={60} />,
    },
  ];
}
