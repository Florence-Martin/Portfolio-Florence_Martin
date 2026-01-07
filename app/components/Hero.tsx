import { Section } from "./Section";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { FranceFlagIcon } from "./icons/FranceFlagIcon";
import { Code } from "./Code";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Configuration centralisée pour faciliter les futures variantes (PO Tech / Dev Front / Freelance)
const HERO_COPY = {
  name: "Florence Martin",
  title: "Product Owner & Product Builder",
  subtitle: "Discovery • UX • Règles fonctionnelles • Prototypage",
  signature: "Créatrice d'outils Produit",
  location: "France",
  tagline:
    "Je conçois des produits digitaux utiles, utilisables et techniquement solides.",
  description:
    "PO à double casquette : je combine vision produit, design UX/UI et développement front-end pour livrer des solutions centrées utilisateur en mode agile.",
  keySkills: [
    "📈 Gestion produit",
    "🎨 UX/UI Design",
    "⚙️ Dev Front-end",
    "🔄 Agilité Scrum",
  ],
  cta: {
    primary: {
      label: "Voir mon projet phare",
      href: "#projects",
      ariaLabel: "Voir mon projet phare combinant PO, UX/UI et data",
    },
    secondary: {
      label: "Me contacter sur LinkedIn",
      href: "https://www.linkedin.com/in/florence-martin-922b3861/",
      ariaLabel: "Me contacter sur LinkedIn",
    },
  },
  availability: "CDI recherché • Freelance possible (Malt / Collective)",
};

export const Hero = () => {
  return (
    <Section className="max-w-4xl px-4 m-auto flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-6">
        {/* Header avec nom et titre */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-400 bg-clip-text text-transparent">
            {HERO_COPY.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-foreground font-semibold">
            {HERO_COPY.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            {HERO_COPY.subtitle}
          </p>
          <p className="text-sm text-muted-foreground/70 italic">
            {HERO_COPY.signature}
          </p>
          <p className="text-base leading-relaxed flex items-center gap-2 pt-2">
            Basée en
            <Code className="inline-flex items-center gap-1.5">
              <FranceFlagIcon size={16} className="inline" />
              {HERO_COPY.location}
            </Code>
          </p>
        </div>

        {/* Tagline courte */}
        <p className="text-lg leading-relaxed text-foreground/90">
          {HERO_COPY.tagline}
        </p>

        {/* Description condensée */}
        <p className="text-base leading-relaxed text-muted-foreground">
          {HERO_COPY.description}
        </p>

        {/* Badges de compétences clés */}
        <div className="flex flex-wrap gap-2">
          {HERO_COPY.keySkills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-2.5 py-0.5 text-xs font-normal rounded-full bg-accent/30 hover:bg-accent/50 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
          >
            <Link
              href={HERO_COPY.cta.primary.href}
              aria-label={HERO_COPY.cta.primary.ariaLabel}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              {HERO_COPY.cta.primary.label}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="default">
            <Link
              href={HERO_COPY.cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={HERO_COPY.cta.secondary.ariaLabel}
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedInIcon size={16} className="mr-2" />
              {HERO_COPY.cta.secondary.label}
            </Link>
          </Button>
        </div>

        {/* Ligne discrète disponibilité */}
        <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-3">
          {HERO_COPY.availability}
        </p>
      </div>
    </Section>
  );
};
