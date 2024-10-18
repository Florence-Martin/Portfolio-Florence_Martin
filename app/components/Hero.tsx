import Image from "next/image";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { FranceFlagIcon } from "./icons/FranceFlagIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 transition-colors font-mono border border-accent px-1 py-0.5 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="text-font-caption text-5xl font-bold text-primary">
          Florence Martin
        </h2>
        <h3 className="text-3xl font-caption">
          Développeuse | UX/UI | CDA [Certification DevOps]
        </h3>
        <p className="text-base">
          Keep in touch with me on{" "}
          <Link
            href="https://www.linkedin.com/in/florence-martin-922b3861/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="inline-flex items-center gap-1">
              <LinkedInIcon size={16} className="inline" /> LinkedIn
            </Code>
          </Link>
          . Living in
          <Code className="inline-flex items-center gap-1">
            <FranceFlagIcon size={16} className="inline" /> France
          </Code>
        </p>
        <p className="text-base">
          Je suis Florence, développeuse front-end passionnée par la création
          d’interfaces utilisateur ergonomiques et performantes. Avec une
          expertise en UX/UI design et une expérience en gestion de produits, je
          combine créativité et rigueur technique pour concevoir des solutions
          numériques innovantes et centrées sur l’utilisateur.
          <br />
          Au fil de mon parcours, j’ai eu l’opportunité de travailler sur des
          projets variés, allant du développement d’interfaces réactives à la
          gestion de produits en tant que Product Owner. Mon approche
          holistique, fondée sur la méthodologie Agile (Scrum), me permet
          d’aligner efficacement les besoins business et techniques pour
          maximiser la valeur des produits.
          <br /> Mes compétences couvrent la conception et l’intégration de
          composants front-end avec des technologies telles que React, Next.js
          et Tailwind, tout en optimisant l’expérience utilisateur grâce à des
          interfaces intuitives et accessibles.
          <br />
          <br />
          <strong>Mes Objectifs</strong> =&gt; Je souhaite continuer à évoluer
          dans ces trois domaines complémentaires :
          <ul>
            <li className="ml-3">
              <strong>- développement front-end</strong>
            </li>
            <li className="ml-3">
              <strong>- UX/UI Design</strong>
            </li>
            <li className="ml-3">
              <strong>- gestion de produits</strong>
            </li>
          </ul>
          Que ce soit au sein d’une équipe créative ou dans le cadre de projets
          novateurs, je cherche à apporter une contribution alliant expertise
          technique et sens du design.
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <Image
          src="/assets/images/FloM.png"
          alt="Photo de Florence Martin"
          className="rounded-full max-w-xs max-md:w-56 "
          width={300}
          height={300}
        />
      </div>
    </Section>
  );
};
