import { Section } from "./Section";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { FranceFlagIcon } from "./icons/FranceFlagIcon";
import { Code } from "./Code";
import { Puzzle } from "lucide-react";

export const Hero = () => {
  return (
    <Section className="max-w-7xl px-4 m-auto flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Florence Martin
        </h1>
        <h2 className="text-base sm:text-lg text-muted-foreground mt-1">
          Product Owner Tech | UX/UI | Développeuse Front-end
        </h2>
        <p className="text-base leading-relaxed">
          Basée en
          <Code className="inline-flex items-center gap-5 ml-2">
            <FranceFlagIcon size={16} className="inline" /> France
          </Code>
        </p>
        <div className="text-base space-y-4 text-muted-foreground">
          <p>
            <em>
              Passionnée par la création de produits digitaux à la fois utiles,
              utilisables et techniquement solides.
            </em>
            <br />
            <em>
              Un parcours évolutif qui me permet d&apos;avoir une vision
              transverse entre <em>produit</em>, <em>technique</em> et{" "}
              <em>expérience utilisateur (data-driven)</em>.
            </em>
          </p>

          <p className="flex items-center gap-2 flex-wrap">
            <strong>Product Owner à double casquette :</strong>{" "}
            <strong>développeuse front-end</strong> et{" "}
            <strong>UX/UI designer</strong>.
            <br />
            <span className="flex items-start gap-2 pt-2">
              <Puzzle className="w-5 h-5 mt-1 shrink-0" />
              <span>
                Je combine la <strong>rigueur technique</strong>, la{" "}
                <strong>pensée design</strong> et une{" "}
                <strong>vision produit globale</strong>.
              </span>
            </span>
          </p>

          <p>
            J’ai travaillé sur des projets variés, allant de la conception
            d’interfaces interactives à la gestion complète du backlog. Je
            m’appuie sur une approche <em>agile (Scrum)</em> pour aligner les
            besoins business et techniques, tout en livrant rapidement des
            solutions centrées utilisateur.
          </p>

          <div>
            <strong>Mes compétences clés :</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>⚙️ Développement front-end (React, Next.js, Tailwind)</li>
              <li>🎨 UX/UI Design (Figma, design system, accessibilité)</li>
              <li>
                📈 Gestion produit (roadmap, user stories, backlog, tests)
              </li>
            </ul>
          </div>

          <p>
            <strong>🎯 Mon objectif :</strong> Continuer à évoluer dans un rôle
            de <strong>PO Tech hybride</strong>, capable de cadrer un produit,
            designer une expérience utilisateur optimale, et dialoguer
            efficacement avec les équipes dev & métiers.
          </p>
        </div>

        <p className="text-base mt-6">
          🔗 Retrouvez-moi sur{" "}
          <Link
            href="https://www.linkedin.com/in/florence-martin-922b3861/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <LinkedInIcon size={16} className="inline" /> LinkedIn
          </Link>{" "}
          pour discuter de collaborations autour de produits web innovants !
        </p>
      </div>
    </Section>
  );
};
