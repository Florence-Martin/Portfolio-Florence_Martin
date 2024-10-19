import React from "react";
import { Card } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
}

export const InfoCard = ({ title }: InfoCardProps) => {
  return (
    <Card className="p-4 flex-1">
      <p className="text-lg text-muted-foreground">{title}</p>
    </Card>
  );
};
