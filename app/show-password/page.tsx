export const metadata = {
  title: "Show Password Toggle - Cruip Tutorials",
  description: "Page description",
};

import PasswordField from "@/components/password-field";
import Banner from "@/components/banner";

export default function AnimatedSwitchPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="w-full max-w-xs mx-auto">
            <form>
              <PasswordField />
            </form>
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/toggle-password-visibility-with-tailwind-css-and-nextjs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/password-field.tsx"
      />
    </>
  );
}
