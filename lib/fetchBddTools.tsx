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
  ];
}
