import { ConfluenceLogo } from "@/app/components/icons/ConfluenceLogo";
import { JiraLogo } from "@/app/components/icons/JiraLogo";
import { ScrumLogo } from "@/app/components/icons/ScrumLogo";
import { TrelloLogo } from "@/app/components/icons/TrelloLogo";

export async function FetchProject() {
  return [
    {
      title: "Jira",
      description: <>Gestion de projets et de suivi des tâches.</>,
      imageLogo: <JiraLogo size={60} />,
    },
    {
      title: "Confluence",
      description: <>Documentation et collaboration d&apos;équipe.</>,
      imageLogo: <ConfluenceLogo size={60} />,
    },
    {
      title: "Trello",
      description: <>Gestion de projets basé sur des tableaux.</>,
      imageLogo: <TrelloLogo size={60} />,
    },
    {
      title: "Scrum",
      description: <>Méthodologie Agile.</>,
      imageLogo: <ScrumLogo size={60} />,
    },
  ];
}
