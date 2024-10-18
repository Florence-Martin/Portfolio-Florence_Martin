import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

// Interface pour typer les props d'un projet secondaire
interface SideProjectProps {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}

// Composant qui affiche une carte de projet secondaire
export const SideProjectCard = ({
  Logo,
  title,
  description,
  url,
}: SideProjectProps) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="text-accent-foreground bg-accent p-3 rounded-sm">
        <Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};
