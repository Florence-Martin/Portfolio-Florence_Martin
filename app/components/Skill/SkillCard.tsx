import { Card } from "@/components/ui/card";
import { ReactElement } from "react";

interface SkillProps {
  title: string;
  imageLogo: ReactElement;
  description: string | ReactElement;
}
export const SkillCard = ({ title, description, imageLogo }: SkillProps) => {
  return (
    <Card className="flex flex-col items-start gap-4 p-2">
      <div>{imageLogo}</div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="flex max-md:flex-col gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};
