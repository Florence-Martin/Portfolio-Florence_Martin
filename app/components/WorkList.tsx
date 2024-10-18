import React from "react";
import { Card } from "@/components/ui/card";
import { WorkCard } from "./WorkCard";

// Liste des expériences de travail
const WORK_EXPERIENCES = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQFctkw5r9W6_g/company-logo_100_100/company-logo_100_100/0/1630543297781/ingeli_logo?e=1737590400&v=beta&t=sj85Cyqs6NsXnTIx0-tSPXc8N9-cRjKnoudluBiTd80",
    title: "Ingeli",
    role: "Développeuse fullstack",
    date: "2023 - 2024",
    url: "https://ingeli.fr/",
    student: true,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQHsZadueOEMjQ/company-logo_100_100/company-logo_100_100/0/1707305304316/numericite_logo?e=1737590400&v=beta&t=4e9qVvDZkvV6dHQPqQiC_lLZZ0JTXe_pqx5CLE_2GAI",
    title: "NumeriCite",
    role: "Developpeuse web",
    date: "2021 - 2022",
    url: "https://numericite.eu/",
    student: true,
  },
];

// Composant pour lister les expériences de travail
export const WorkList = () => {
  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Mes expériences</p>
      <div className="flex flex-col gap-4">
        {WORK_EXPERIENCES.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </Card>
  );
};
