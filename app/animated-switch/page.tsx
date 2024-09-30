export const metadata = {
  title: "Animated Switch - Cruip Tutorials",
  description: "Page description",
};

import Switch from "@/components/switch";
import Banner from "@/components/banner";

export default function AnimatedSwitchPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <form>
            <div className="flex justify-center">
              <div className="inline-flex items-center">
                <Switch id="airplane-mode" />
                <label
                  className="text-sm font-medium text-gray-600 ml-3"
                  htmlFor="airplane-mode"
                >
                  Airplane mode
                </label>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/using-tailwind-css-and-next-js-to-create-animated-and-accessible-tabs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/unconventional-tabs.tsx"
      />
    </>
  );
}
