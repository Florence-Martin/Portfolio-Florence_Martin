import { ModelisationLogo } from "@/app/components/icons/ModelisationLogo";
import { NotionLogo } from "@/app/components/icons/NotionLogo";
import { WebstormLogo } from "@/app/components/icons/WebstormLogo";

export async function fetchAdditionalTools() {
  return [
    {
      title: "Notion",
      description: <>Organisation personnelle et documentation.</>,
      imageLogo: <NotionLogo size={60} />,
    },
    {
      title: "WebStorm",
      description: <>IDE JavaScript pour productivité et débogage.</>,
      imageLogo: <WebstormLogo size={60} />,
    },
    {
      title: "StarUML",
      description: <>Modélisation UML pour architecture logicielle.</>,
      imageLogo: <ModelisationLogo size={60} />,
    },
    {
      title: "Looping",
      description: <>Modélisation Merise pour bases de données.</>,
      imageLogo: <ModelisationLogo size={60} />,
    },
    {
      title: "JMerise",
      description: <>Conception de schémas relationnels (Merise).</>,
      imageLogo: <ModelisationLogo size={60} />,
    },
  ];
}
