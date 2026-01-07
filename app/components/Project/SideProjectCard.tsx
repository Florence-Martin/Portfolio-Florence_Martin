"use client";

import { motion } from "framer-motion";
import { LucideIcon, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SideProjectProps {
  Logo: LucideIcon;
  title: string;
  role?: string;
  description: string;
  urlWebsite: string;
  urlGitHub: string;
  technologies: string[];
  inProgress?: boolean;
  isDemo?: boolean;
  featured?: boolean;
}

export const SideProjectCard = ({
  Logo,
  title,
  role,
  description,
  urlWebsite,
  urlGitHub,
  technologies,
  inProgress,
  isDemo,
  featured,
}: SideProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`group bg-card border transition-all duration-300 ${
          featured
            ? "border-primary/50 shadow-md hover:shadow-lg"
            : "border-border hover:border-primary/30"
        }`}
      >
        <CardHeader className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Logo className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
                {/* Badges statut */}
                <div className="flex flex-wrap gap-2">
                  {isDemo && (
                    <Badge
                      variant="outline"
                      className="rounded-full border-green-600 text-green-600 text-xs px-2 py-0.5"
                    >
                      ✓ Démo interactive
                    </Badge>
                  )}
                  {inProgress && (
                    <Badge
                      variant="outline"
                      className="rounded-full border-orange-600 text-orange-600 text-xs px-2 py-0.5"
                    >
                      🚧 En cours
                    </Badge>
                  )}
                </div>
              </div>
              {role && (
                <p className="text-xs text-muted-foreground font-medium">
                  {role}
                </p>
              )}
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Technologies (badges chips) */}
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full text-xs font-normal bg-accent/30 hover:bg-accent/50 px-2.5 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTAs clairs */}
          <div className="flex flex-wrap gap-2">
            {urlWebsite && (
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
              >
                <Link
                  href={urlWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le site de ${title}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {isDemo ? "Voir la démo" : "Voir le site"}
                </Link>
              </Button>
            )}
            {urlGitHub && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={urlGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Code GitHub de ${title}`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
