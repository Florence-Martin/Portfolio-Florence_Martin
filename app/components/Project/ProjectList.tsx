"use client";

import React, { useState } from "react";
import { FetchProject } from "@/lib/fetchProject";
import { SideProjectCard } from "./SideProjectCard";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ProjectList: React.FC = async () => {
  const projects = await FetchProject();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          className="text-3xl font-medium text-foreground mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes projets
        </motion.h2>

        {/* Section Projets phares */}
        {featuredProjects.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="text-primary">★</span> Projets phares
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {featuredProjects.map((project) => (
                <SideProjectCard key={project.title} {...project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Section Autres projets avec toggle */}
        {otherProjects.length > 0 && (
          <OtherProjectsSection projects={otherProjects} />
        )}
      </div>
    </Card>
  );
};

// Composant client pour gérer l'état du toggle
function OtherProjectsSection({ projects }: { projects: any[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-muted-foreground">
          Autres projets ({projects.length})
        </h3>
        <p className="text-sm text-muted-foreground/80">
          Autres projets techniques & expérimentations
        </p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-muted-foreground hover:text-foreground w-full justify-center"
        aria-expanded={isExpanded}
        aria-label={
          isExpanded ? "Masquer les autres projets" : "Voir les autres projets"
        }
      >
        {isExpanded ? (
          <>
            Voir moins <ChevronUp className="ml-2 w-4 h-4" />
          </>
        ) : (
          <>
            Voir plus <ChevronDown className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-4"
        >
          {projects.map((project) => (
            <SideProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
