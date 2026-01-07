"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FetchProject } from "@/lib/fetchProjectTools";
import { FetchDesignTools } from "@/lib/fetchDesignTools";
import { FetchDevopsTools } from "@/lib/fetchDevopsTools";
import { fetchAdditionalTools } from "@/lib/fetchAdditionalTools";
import { fetchBddTools } from "@/lib/fetchBddTools";

type Category =
  | "Tous"
  | "Produit"
  | "UX-Design"
  | "DevOps"
  | "Engineering"
  | "Data";

interface Tool {
  title: string;
  description: React.ReactNode;
  imageLogo: React.ReactNode;
  category: Category;
}

export const ToolList: React.FC = async () => {
  const projectTools = await FetchProject();
  const designTools = await FetchDesignTools();
  const devopsTools = await FetchDevopsTools();
  const additionalTools = await fetchAdditionalTools();
  const bddTools = await fetchBddTools();

  const allTools: Tool[] = [
    ...projectTools.map((tool) => ({
      ...tool,
      category: "Produit" as Category,
    })),
    ...designTools.map((tool) => ({
      ...tool,
      category: "UX-Design" as Category,
    })),
    ...devopsTools.map((tool) => ({ ...tool, category: "DevOps" as Category })),
    ...bddTools.map((tool) => ({
      ...tool,
      category: "Data" as Category,
    })),
    ...additionalTools.map((tool) => ({
      ...tool,
      category: "Engineering" as Category,
    })),
  ];

  return <ToolListClient tools={allTools} />;
};

function ToolListClient({ tools }: { tools: Tool[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories: Category[] = [
    "Tous",
    "Produit",
    "UX-Design",
    "Engineering",
    "Data",
    "DevOps",
  ];

  const filteredTools =
    selectedCategory === "Tous"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  const displayedTools = isExpanded ? filteredTools : filteredTools.slice(0, 8);

  return (
    <div className="w-full p-6 flex flex-col gap-6">
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className={`cursor-pointer px-3 py-1.5 text-sm transition-all border-border ${
              selectedCategory === category
                ? "text-[#4a90e2] font-semibold"
                : "hover:bg-accent text-muted-foreground"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setIsExpanded(false);
            }}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Grille d'outils */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedTools.map((tool, index) => (
          <Card
            key={index}
            className="h-full hover:bg-slate-700 transition-all"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
              <div className="flex items-center justify-center">
                {tool.imageLogo}
              </div>
              <h3 className="text-xl font-semibold text-center">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bouton Voir plus/moins */}
      {filteredTools.length > 8 && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground hover:text-foreground"
            aria-expanded={isExpanded}
            aria-label={
              isExpanded ? "Voir moins d'outils" : "Voir plus d'outils"
            }
          >
            {isExpanded ? (
              <>
                Voir moins <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Voir plus ({filteredTools.length - 8} restants){" "}
                <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
