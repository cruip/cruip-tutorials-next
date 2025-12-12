export const metadata = {
  title: "Credit Card Form - Cruip Tutorials",
  description: "Page description",
};

import CreditCardNumber from "./cc-number";
import Banner from "@/components/banner";

export default function AnimatedSwitchPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <form>
            <div className="flex justify-center">
              <CreditCardNumber />
            </div>
          </form>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/animate-a-react-switch-toggle-with-framer-motion/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/switch.tsx"
      />
    </>
  );
}
