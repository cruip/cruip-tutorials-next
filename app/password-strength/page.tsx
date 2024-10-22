export const metadata = {
  title: "Password Strength Meter - Cruip Tutorials",
  description: "Page with password strength meter",
};

import PasswordStrengthField from "@/components/password-strength-field";
import Banner from "@/components/banner";

export default function PasswordStrengthPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="w-full max-w-xs mx-auto">
            <form>
              <PasswordStrengthField />
            </form>
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/creating-a-password-strength-meter-with-tailwind-css-and-next-js/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/password-strength-field.tsx"
      />
    </>
  );
}