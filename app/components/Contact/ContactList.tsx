import React from "react";
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";

const CONTACT = [
  {
    url: "https://www.linkedin.com/in/florence-martin-922b3861/",
    name: "@Florence-Martin",
    image: "/assets/images/FloM.png",
    mediumImage: "/assets/images/LinkedIn.png",
    description: "Contactez-moi sur LinkedIn",
  },
];

export const ContactList = () => {
  return (
    <Card className="w-full p-4 flex flex-col gap-2">
      <p className="text-lg text-muted-foreground">Contact</p>
      <div className="flex flex-col gap-4">
        {CONTACT.map((contact) => (
          <ContactCard key={contact.name} {...contact} />
        ))}
      </div>
    </Card>
  );
};
