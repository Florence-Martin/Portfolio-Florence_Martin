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
  stack?: string[];
  experienceType?: string;
  bullets?: string[];
}

export const WorkCard = ({
  image,
  title,
  role,
  date,
  url,
  experienceType,
  stack,
  bullets,
}: WorkProps) => {
  return (
    <Card className="p-4 bg-accent/10 group hover:bg-slate-700 transition-colors">
      <div className="flex items-start gap-4">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${title}`}
          className="flex-shrink-0"
        >
          <Image
            src={image}
            alt={`Image of ${title}`}
            width={48}
            height={48}
            className="object-contain rounded-md hover:opacity-80 transition-opacity"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                {title}
              </Link>
              {experienceType && (
                <Badge variant="outline" className="text-xs">
                  {experienceType}
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground whitespace-nowrap">
              {date}
            </p>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{role}</p>
          {bullets && bullets.length > 0 && (
            <ul className="space-y-1.5 mb-3 text-sm">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {stack && stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {stack.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
