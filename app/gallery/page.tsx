"use client";

import { useEffect, useState } from "react";
import { FetchFrontendMentorChallenges } from "@/lib/fetchFrontendMentorChallenges";
import FrontendMentorCard from "../components/FrontendMentor/FrontendMentorCard";
import GoBackButton from "@/components/ui/GoBackButton";

interface Challenge {
  id: number;
  title: string;
  type: string;
  level: string;
  image: string;
  role: string;
  url: string;
  stack: string[];
}

export default function Gallery() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadChallenges() {
      try {
        const data = await FetchFrontendMentorChallenges();
        setChallenges(data);
      } catch {
        setError("Erreur lors du chargement des challenges.");
      } finally {
        setLoading(false);
      }
    }
    loadChallenges();
  }, []);

  if (loading) return <p className="text-center">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main className="min-h-screen flex flex-col">
      <section className="w-full p-6 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <GoBackButton />
          <h2 className="text-lg sm:text-xl font-bold text-left text-white">
            🚀 Mes Challenges Frontend Mentor
          </h2>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((challenge) => (
              <FrontendMentorCard key={challenge.id} {...challenge} />
            ))}
        </div>
      </section>
    </main>
  );
}
