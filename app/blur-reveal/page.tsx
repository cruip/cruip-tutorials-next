export const metadata = {
  title: "Sliding Text - Cruip Tutorials",
  description: "Page description",
};

import BlurReveal from "@/components/blur-reveal";
import Banner from "@/components/banner";

export default function BlurRevealPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-zinc-950">
        <div
          className="absolute left-0 top-0 h-[600px] w-[1000px] rotate-45 rounded-full bg-[radial-gradient(closest-side,var(--tw-gradient-stops))] from-white/[0.05] to-transparent"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-20 left-20 h-[200px] w-[1000px] rotate-45 rounded-full bg-[radial-gradient(closest-side,var(--tw-gradient-stops))] from-white/[0.03] to-transparent"
          aria-hidden="true"
        ></div>

        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="mx-auto max-w-3xl">
            <BlurReveal />
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/blur-reveal-effect-with-framer-motion-and-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/blur-reveal.tsx"
      />
    </>
  );
}
