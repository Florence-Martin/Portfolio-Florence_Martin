import React from "react";
import { Card } from "@/components/ui/card";
import { WorkCard } from "./WorkCard";
import { fetchWork } from "@/lib/fetchWork";

export const WorkList: React.FC = async () => {
  const worksExperiences = await fetchWork();
  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <p className="text-xl font-medium text-muted-foreground">
        Mes expériences
      </p>
      <div className="flex flex-col gap-4">
        {worksExperiences.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </Card>
  );
};
