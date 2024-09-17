export const metadata = {
  title: "Sliding Text - Cruip Tutorials",
  description: "Page description",
};

import RotatingWords from "@/components/rotating-words";
import Banner from "@/components/banner";

export default function RotatingWordsPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="text-center">
            <RotatingWords />
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/rotating-words.tsx"
      />
    </>
  );
}
