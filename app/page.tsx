import Link from "next/link";
import { FC } from "react";
import TutorialCard from "@/components/home-page-cards/tutorialCard";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16">
          <div className="flex justify-center">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-pink-500 to-orange-500 text-5xl font-bold">
              Tutorials
            </span>
          </div>
          <TutorialCard />
        </div>
      </main>
    </>
  );
};

export default page;
