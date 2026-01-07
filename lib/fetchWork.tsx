// /lib/fetchWork.ts
export async function fetchWork() {
  return [
    {
      image: "/assets/images/ingeli_logo.png",
      title: "Ingeli",
      role: "Développeuse fullstack",
      date: "2023 - 2024",
      url: "https://ingeli.fr/",
      experienceType: "Alternance (CDA) · Certification DevOps",
      stack: ["C#", "MongoDB", "SCSS"],
      bullets: [
        "Cadrage des besoins utilisateurs et rédaction de spécifications fonctionnelles",
        "Développement fullstack et intégration de nouvelles fonctionnalités",
      ],
    },
    {
      image: "/assets/images/numericite_logo.jpeg",
      title: "NumeriCite",
      role: "Développeuse web",
      date: "2021 - 2022",
      url: "https://numericite.eu/",
      experienceType: "Stage",
      stack: ["React", "MongoDB"],
      bullets: [
        "Contribution à la définition des parcours utilisateurs et maquettage",
        "Participation au développement front-end et aux tests d'intégration",
      ],
    },
  ];
}
