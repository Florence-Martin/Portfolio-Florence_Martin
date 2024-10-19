import React from "react";
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";

const CONTACT = [
  {
    name: "@Florence-Martin",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQHqkKeH8nhpzg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1665412575506?e=1734566400&v=beta&t=DEQjdGf4N6JtYrvSgPOYq4uG49xWlF35Fvm0jGT8lX4",
    mediumImage: "/assets/images/LinkedIn.png",
    description: "Contactez-moi sur LinkedIn",
  },
  //   {
  //     name: "@Florence Martin",
  //     image:
  //       "https://media.licdn.com/dms/image/v2/D4E03AQHqkKeH8nhpzg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1665412575506?e=1734566400&v=beta&t=DEQjdGf4N6JtYrvSgPOYq4uG49xWlF35Fvm0jGT8lX4",
  //     mediumImage: "/assets/images/Vercel.png",
  //     description: "",
  //   },
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
