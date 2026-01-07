import { DockerLogo } from "@/app/components/icons/DockerLogo";
import { GitHubIcon } from "@/app/components/icons/GitHubIcon";

export async function FetchDevopsTools() {
  return [
    {
      title: "GitHub Actions",
      description: <>CI/CD et automatisation des déploiements.</>,
      imageLogo: <GitHubIcon size={60} />,
    },
    {
      title: "Docker",
      description: <>Environnements maîtrisés pour la delivery.</>,
      imageLogo: <DockerLogo size={60} />,
    },
    {
      title: "Docker Compose",
      description: <>Orchestration multi-services en local.</>,
      imageLogo: <DockerLogo size={60} />,
    },
  ];
}
