import { FirebaseLogo } from "@/app/components/icons/FirebaseLogo";
import { MongoDbLogo } from "@/app/components/icons/MongoDbLogo";
import { MySQLLogo } from "@/app/components/icons/MySQLLogo";
import { PostgreSQLLogo } from "@/app/components/icons/PostgreSQLLogo";

export async function fetchBddTools() {
  return [
    {
      title: "MySQL",
      description: <>Base de données relationnelle open source.</>,
      imageLogo: <MySQLLogo size={60} />,
    },
    {
      title: "PostgreSQL",
      description: <>Base de données avancée open source.</>,
      imageLogo: <PostgreSQLLogo size={60} />,
    },
    {
      title: "MongoDB",
      description: (
        <>Base de données NoSQL orientée documents, sans schéma prédéfini.</>
      ),
      imageLogo: <MongoDbLogo size={60} />,
    },
    {
      title: "Firebase",
      description: (
        <>Plateforme temps réel pour prototypage rapide et persistance cloud.</>
      ),
      imageLogo: <FirebaseLogo size={60} className="text-primary" />,
    },
  ];
}
