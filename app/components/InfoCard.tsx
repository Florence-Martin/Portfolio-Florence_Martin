import React from "react";
import { Card } from "@/components/ui/card";

// Interface pour les props du composant InfoCard
interface InfoCardProps {
  title: string;
}

// Composant générique pour afficher une carte d'information (Work, Contact, etc.)
export const InfoCard = ({ title }: InfoCardProps) => {
  return (
    <Card className="p-4 flex-1">
      <p className="text-lg text-muted-foreground">{title}</p>
    </Card>
  );
};
