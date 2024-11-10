import { ModelisationLogo } from "@/app/components/icons/ModelisationLogo";
import { NotionLogo } from "@/app/components/icons/NotionLogo";
import { WebstormLogo } from "@/app/components/icons/WebstormLogo";

export async function fetchAdditionalTools() {
  return [
    {
      title: "Notion",
      description: <>Prise de notes et gestion de projets.</>,
      imageLogo: <NotionLogo size={60} />,
    },
    {
      title: "WebStorm",
      description: <>Environnement de développement intégré pour JavaScript.</>,
      imageLogo: <WebstormLogo size={60} />,
    },
    {
      title: "StarUML",
      description: (
        <>Outil de modélisation UML pour le développement logiciel.</>
      ),
      imageLogo: <ModelisationLogo size={60} />,
    },
    {
      title: "Looping",
      description: <>Outil de modélisation pour la méthode Merise.</>,
      imageLogo: <ModelisationLogo size={60} />,
    },
    {
      title: "JMerise",
      description: <>Outil de modélisation pour la méthode Merise.</>,
      imageLogo: <ModelisationLogo size={60} />,
    },
  ];
}
