import { ConfluenceLogo } from "@/app/components/icons/ConfluenceLogo";
import { JiraLogo } from "@/app/components/icons/JiraLogo";
import { ScrumLogo } from "@/app/components/icons/ScrumLogo";
import { TrelloLogo } from "@/app/components/icons/TrelloLogo";

export async function FetchProject() {
  return [
    {
      title: "Jira",
      description: <>Gestion du backlog, priorisation et suivi produit.</>,
      imageLogo: <JiraLogo size={60} />,
    },
    {
      title: "Confluence",
      description: <>Documentation produit et règles fonctionnelles.</>,
      imageLogo: <ConfluenceLogo size={60} />,
    },
    {
      title: "Trello",
      description: <>Organisation visuelle et gestion de flux.</>,
      imageLogo: <TrelloLogo size={60} />,
    },
    {
      title: "Scrum",
      description: <>Pilotage agile et livraisons itératives.</>,
      imageLogo: <ScrumLogo size={60} />,
    },
  ];
}
