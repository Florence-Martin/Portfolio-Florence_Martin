import { FetchFrontendMentorChallenges } from "@/lib/fetchFrontendMentorChallenges";
import FrontendMentorCard from "../components/FrontendMentor/FrontendMentorCard";
import GoBackButton from "@/components/ui/GoBackButton";

export default async function Gallery() {
  const challenges = await FetchFrontendMentorChallenges();

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
