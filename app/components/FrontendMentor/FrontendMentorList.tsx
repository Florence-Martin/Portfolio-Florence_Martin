import React from "react";
import { Card } from "@/components/ui/card";
import FrontendMentorFolder from "./FrontendMentorFolder";

export const FrontendMentorList: React.FC = async () => {
  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <p className="text-xl font-medium text-muted-foreground mb-10 md:mb-8">
        Mes challenges Frontend Mentor
      </p>
      <FrontendMentorFolder />
    </Card>
  );
};
