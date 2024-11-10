import { NextLogo } from "@/app/components/icons/NextLogo";
import { ReactLogo } from "@/app/components/icons/ReactLogo";
import { ShadcnLogo } from "@/app/components/icons/ShadcnLogo";
import { TailwindLogo } from "@/app/components/icons/TailwindLogo";
import { Code } from "lucide-react";

export async function FetchSkill() {
  return [
    {
      title: "React",
      description: (
        <>
          Mon framework principal est <Code>React</Code> comme framework
          frontend.
        </>
      ),
      imageLogo: (
        <ReactLogo
          size={42}
          className="animate-spin"
          style={{ animationDuration: "10s" }}
        />
      ),
    },
    {
      title: "Next.js",
      description: (
        <>
          J&apos;utilise également <Code>Next.js</Code> comme framework backend
          et frontend.
        </>
      ),
      imageLogo: <NextLogo size={42} />,
    },
    {
      title: "Shadcn/UI",
      description: (
        <>
          J&apos;utilise <Code>Shadcn/UI</Code> pour des composants UI élégants
          et réutilisables.
        </>
      ),
      imageLogo: <ShadcnLogo size={42} />,
    },
    {
      title: "TailwindCSS",
      description: (
        <>
          Je peux créer de <u>belles</u> applications <i>rapidement</i> avec
          <Code>TailwindCSS</Code>.
        </>
      ),
      imageLogo: <TailwindLogo size={42} />,
    },
  ];
}
