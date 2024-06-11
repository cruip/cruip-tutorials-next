export const metadata = {
  title: "Active Link - Cruip Tutorials",
  description: "Page description",
};

import NavigationMenu from "../navigation-menu";
import Banner from "@/components/banner";

export default function InnerPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-24 md:px-6">
          <NavigationMenu />
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/building-a-simple-animated-accordion-component-with-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/accordion.tsx"
      />
    </>
  );
}
