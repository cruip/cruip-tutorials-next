export const metadata = {
  title: "Masonry - Cruip Tutorials",
  description: "Page description",
};

import TestimonialsGrid from "./testimonials-grid";
import Banner from "@/components/banner";

export default function MasonryPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <TestimonialsGrid />
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/how-to-create-a-true-masonry-with-nextjs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/app/components/utils/useMasonry.ts"
      />
    </>
  );
}
