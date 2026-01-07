import { Code } from "@/app/components/Code";
import { NextLogo } from "@/app/components/icons/NextLogo";
import { ReactLogo } from "@/app/components/icons/ReactLogo";
import { ShadcnLogo } from "@/app/components/icons/ShadcnLogo";
import { TailwindLogo } from "@/app/components/icons/TailwindLogo";

export async function FetchSkill() {
  return [
    {
      title: "React",
      description: (
        <>
          Structuration d&apos;interfaces complexes et réutilisables pour des
          produits à fort trafic.
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
          Applications orientées produit avec SEO, performance et delivery
          rapide en production.
        </>
      ),
      imageLogo: <NextLogo size={42} />,
    },
    {
      title: "Shadcn/UI",
      description: (
        <>
          Composants accessibles et maintenables pour accélérer la création de
          design systems.
        </>
      ),
      imageLogo: <ShadcnLogo size={42} />,
    },
    {
      title: "TailwindCSS",
      description: (
        <>
          Itération rapide sur les UI et cohérence visuelle à l&apos;échelle du
          produit.
        </>
      ),
      imageLogo: <TailwindLogo size={42} />,
    },
  ];
}
