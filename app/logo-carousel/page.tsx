export const metadata = {
  title: "Logo Carousel - Cruip Tutorials",
  description: "Page description",
};

import LogoCarousel from "@/components/logo-carousel";
import Banner from "@/components/banner";

export default function LogoCarouselPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="text-center">
            <LogoCarousel />
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/logo-carousel.tsx"
      />
    </>
  );
}
