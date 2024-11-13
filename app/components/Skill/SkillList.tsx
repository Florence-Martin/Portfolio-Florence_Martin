import { Section } from "../Section";
import { SkillCard } from "./SkillCard";
import { FetchSkill } from "@/lib/fetchSkill";

export const SkillList: React.FC = async () => {
  const skills = await FetchSkill();
  return (
    <Section className="w-full p-4 flex flex-col gap-2">
      <p className="text-xl font-medium text-muted-foreground">
        Mes frameworks et librairies de prédilection...
      </p>
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </Section>
  );
};
