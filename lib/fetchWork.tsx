// /lib/fetchWork.ts
export async function fetchWork() {
  return [
    {
      // On pointe vers les images stockées localement
      image: "/assets/images/ingeli_logo.png",
      title: "Ingeli",
      role: "Développeuse fullstack",
      date: "2023 - 2024",
      url: "https://ingeli.fr/",
      student: true,
      stack: ["C#", "MongoDB", "SCSS"],
    },
    {
      image: "/assets/images/numericite_logo.jpeg",
      title: "NumeriCite",
      role: "Developpeuse web",
      date: "2021 - 2022",
      url: "https://numericite.eu/",
      student: true,
      stack: ["React", "MongoDB", "CSS"],
    },
  ];
}
