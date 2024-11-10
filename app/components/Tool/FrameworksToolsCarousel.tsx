import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "../Section";
import { FetchFramework } from "@/lib/fetchFrameworkTools";

export const FrameworksToolsCarousel: React.FC = async () => {
  const ToolsFramework = await FetchFramework();

  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Librairies et Frameworks</p>

      {/* Conteneur de défilement horizontal avec accrochage */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 py-4">
        {ToolsFramework.map((tool, index) => (
          <div key={index} className="snap-center flex-shrink-0 w-64">
            <Card className="w-full h-full">
              <CardContent className="flex items-center justify-center p-6">
                <div className="flex flex-col items-center gap-6">
                  {tool.imageLogo}
                  <span className="text-3xl font-semibold">{tool.title}</span>
                  <p>{tool.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};
