import { Section } from "./Section";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { FranceFlagIcon } from "./icons/FranceFlagIcon";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
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
          numériques innovantes et centrées sur l’utilisateur. <br />
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
          <strong>Mes Objectifs</strong> =&gt; Continuer à évoluer dans ces
          trois domaines complémentaires :
        </p>
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
        <p className="text-base">
          Que ce soit au sein d’une équipe créative ou dans le cadre de projets
          novateurs, je cherche à apporter une contribution alliant expertise
          technique et sens du design.
        </p>
      </div>
    </Section>
  );
};
