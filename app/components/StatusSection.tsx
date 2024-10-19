import React from "react";
import { Section } from "./Section";
import { ProjectList } from "./Project/ProjectList";
import { WorkList } from "./Work/WorkList";
import { ContactList } from "./Contact/ContactList";

// Composant principal qui regroupe les sections : Projets, Work, Contact
export const StatusSection = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      {/* Section des projets */}
      <div className="flex-[3] w-full">
        <ProjectList />
      </div>

      {/* Section Work et Contact */}
      <div className="flex-[2] w-full flex flex-col gap-4">
        <WorkList />
        <ContactList />
      </div>
    </Section>
  );
};
