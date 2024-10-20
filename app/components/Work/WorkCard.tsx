import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface WorkProps {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  student?: boolean;
}

export const WorkCard = ({
  image,
  title,
  role,
  date,
  url,
  student,
}: WorkProps) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <Link
        href={url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      >
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-contain rounded-md"
        />

        <div>
          <p className="text-lg font-semibold">{title}</p>
          {student && <Badge variant="outline">Student</Badge>}
          <p className="text-md text-muted-foreground">{role}</p>
        </div>
        <div className="ml-auto">
          <p className="text-xs text-end text-muted-foreground">{date}</p>
        </div>
      </Link>
    </Card>
  );
};
