import React from "react";
import { FetchProject } from "@/lib/fetchProject";
import { ProjectListClient } from "./ProjectListClient";

export const ProjectList: React.FC = async () => {
  const projects = await FetchProject();

  return <ProjectListClient projects={projects} />;
};
