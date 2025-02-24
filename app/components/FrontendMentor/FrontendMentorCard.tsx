import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ChallengeProps {
  id: number;
  title: string;
  type: string;
  level: string;
  image: string;
  role: string;
  url: string;
  stack: string[];
}

export default function FrontendMentorCard({
  title,
  type,
  level,
  image,
  role,
  url,
  stack,
}: ChallengeProps) {
  return (
    <Card
      className="relative group overflow-hidden rounded-xl border border-gray-500 bg-gradient-to-b from-gray-900 to-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[400px] mx-auto"
      role="article"
      aria-labelledby={`challenge-title-${title}`}
    >
      {/* Conteneur de l'image */}
      <div className="relative w-full h-[230px] overflow-hidden flex justify-center items-center">
        <Image
          src={image}
          alt={`Aperçu du projet ${title}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <CardContent className="p-6 flex flex-col gap-3 text-center h-[200px]">
        {/* Nom du Challenge */}
        <h3
          id={`challenge-title-${title}`}
          className="text-lg font-bold text-white"
        >
          {title}
        </h3>

        {/* Role, Type & Niveau */}
        <div className="flex justify-center gap-2 text-sm text-gray-400">
          <span className="px-1 py-1">
            <span className="text-white mr-1">|</span>
            {role}
          </span>
          <span className="px-1 py-1">
            <span className="text-white mr-1">|</span>
            {type}
          </span>
          <span className="px-1 py-1">
            <span className="text-white mr-1">|</span>
            {level}
          </span>
        </div>

        {/* Stack utilisée */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {stack?.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              aria-label={`Technologie utilisée: ${tech}`}
            >
              <span className="text-white mr-1">#</span>
              {tech}
            </Badge>
          ))}
        </div>

        {/* Bouton Voir le Projet */}
        {url && (
          <Link
            href={url}
            target="_blank"
            className="mb-2 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            aria-label={`Voir le projet ${title}`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Voir le projet
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
