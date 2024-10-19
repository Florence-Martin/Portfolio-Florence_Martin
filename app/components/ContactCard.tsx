import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface ContactProps {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}

export const ContactCard = ({
  image,
  mediumImage,
  name,
  description,
}: ContactProps) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <Image
          src={mediumImage}
          alt={name}
          width={20}
          height={20}
          className="absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
      <Link
        href="https://www.linkedin.com/in/florence-martin-922b3861/"
        target="_blank"
      >
        <SquareArrowOutUpRight
          size={16}
          className="w-6 h-6 text-accent group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        />
      </Link>
    </Card>
  );
};
