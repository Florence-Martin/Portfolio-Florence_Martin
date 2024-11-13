"use client";

import { motion } from "framer-motion";
import { LucideIcon, ExternalLink, Github, ChevronRight } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SideProjectProps {
  Logo: LucideIcon;
  title: string;
  description: string;
  urlWebsite: string;
  urlGitHub: string;
  technologies: string[];
}

export const SideProjectCard = ({
  Logo,
  title,
  description,
  urlWebsite,
  urlGitHub,
  technologies,
}: SideProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group bg-card border border-border hover:bg-slate-700 transition-all duration-300 p-4">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
            <Logo className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-2 w-full justify-between">
            {/* Conteneur gauche pour les liens */}
            <div className="flex items-center gap-4">
              {urlGitHub && (
                <Link
                  href={urlGitHub}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
              {urlWebsite && (
                <Link
                  href={urlWebsite}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-6 h-6" />
                  <span className="sr-only">Site en ligne</span>
                </Link>
              )}
            </div>

            {/* Conteneur droit pour les technologies et la flèche */}
            <div className="flex items-center gap-2">
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 2).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted text-muted-foreground border-border"
                  >
                    {tech}
                  </Badge>
                ))}
                {technologies.length > 2 && (
                  <Badge
                    variant="secondary"
                    className="bg-muted text-muted-foreground border-border"
                  >
                    +{technologies.length - 2}
                  </Badge>
                )}
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary ml-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card text-card-foreground border-border">
                  <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-muted text-muted-foreground border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
