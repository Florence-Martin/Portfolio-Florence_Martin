export async function FetchFrontendMentorChallenges() {
  return [
    {
      id: 1,
      title: "3 column preview card",
      type: "Landing Page",
      level: "Newbie",
      image: "/assets/images/3-column-preview-card.png",
      role: "Frontend",
      url: "https://3-column-preview-card-swart-nu.vercel.app/",
      stack: ["Next.js"],
    },
    {
      id: 2,
      title: "Time tracking dashboard",
      type: "Landing Page",
      level: "Junior",
      image: "/assets/images/time-tracking-dashboard.png",
      role: "Frontend",
      url: "https://time-tracking-dashboard-rho-nine.vercel.app/",
      stack: ["Next.js"],
    },
    {
      id: 3,
      title: "GitHub User Search App",
      type: "Landing Page",
      level: "Premium-Junior",
      image: "/assets/images/github-user-search-app.png",
      role: "Frontend",
      url: "https://github-user-search-app-lovat-seven.vercel.app/",
      stack: ["Next.js", "GitHub API"],
    },
    {
      id: 4,
      title: "Personal blog",
      type: "Blog",
      level: "Intermediate",
      image: "/assets/images/personal-blog.jpg",
      role: "Frontend",
      url: "https://frontend-mentor-challenges-personal-blog.vercel.app/",
      stack: ["Next.js", "Tailwind CSS"],
    },
  ];
}
