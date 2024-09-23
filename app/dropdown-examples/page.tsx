export const metadata = {
  title: "4 Dropdown Examples - Cruip Tutorials",
  description: "Page description",
};

import Banner from "@/components/banner";
import Dropdown01 from "@/components/dropdown-01";
import Dropdown02 from "@/components/dropdown-02";
import Dropdown03 from "@/components/dropdown-03";
import Dropdown04 from "@/components/dropdown-04";

export default function DropdownExamplesPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="grid gap-6 sm:grid-cols-4 items-start lg:max-w-none">
            <div className="flex justify-end">
              <Dropdown01 />
            </div>
            <div className="flex justify-end">
              <Dropdown02 />
            </div>
            <div className="flex justify-end">
              <Dropdown03 />
            </div>
            <div className="flex justify-end">
              <Dropdown04 />
            </div>
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/using-tailwind-css-and-next-js-to-create-animated-and-accessible-tabs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/unconventional-tabs.tsx"
      />
    </>
  );
}
