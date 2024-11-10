import { DockerLogo } from "@/app/components/icons/DockerLogo";
import { GitHubIcon } from "@/app/components/icons/GitHubIcon";

export async function FetchDevopsTools() {
  return [
    {
      title: "GitHub Actions",
      description: <>Automatisation des workflows CI/CD.</>,
      imageLogo: <GitHubIcon size={60} />,
    },
    {
      title: "Docker",
      description: <>Conteneurisation d&apos;applications.</>,
      imageLogo: <DockerLogo size={60} />,
    },
    {
      title: "Docker Compose",
      description: <>Gestion de conteneurs multi-services.</>,
      imageLogo: <DockerLogo size={60} />,
    },
  ];
}
