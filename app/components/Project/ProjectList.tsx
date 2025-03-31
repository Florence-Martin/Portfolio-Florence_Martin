"use client";

import React from "react";
import { FetchProject } from "@/lib/fetchProject";
import { SideProjectCard } from "./SideProjectCard";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const ProjectList: React.FC = async () => {
  const projects = await FetchProject();

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
        <div className="grid gap-6">
          {projects.map((project) => (
            <SideProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Card>
  );
};
