export const metadata = {
  title: "Particle Animation - Cruip Tutorials",
  description: "Page description",
};

import Image from "next/image";
import Particles from "@/components/particles";
import Banner from "@/components/banner";
import Shape from "@/public/shape.svg";

export default function ModalVideoPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="text-center">
            {/* Illustration #1 */}
            <div
              className="pointer-events-none absolute left-0 top-0 -translate-x-3/4 rotate-180 -scale-x-100 opacity-70 blur-3xl"
              aria-hidden="true"
            >
              <Image
                src={Shape}
                className="max-w-none"
                width={852}
                height={582}
                alt="Illustration"
              />
            </div>

            {/* Illustration #2 */}
            <div
              className="pointer-events-none absolute right-0 top-0 -translate-y-1/2 translate-x-1/4 opacity-70 blur-3xl"
              aria-hidden="true"
            >
              <Image
                src={Shape}
                className="max-w-none"
                width={852}
                height={582}
                alt="Illustration"
              />
            </div>

            {/* Particles animation */}
            <Particles className="pointer-events-none absolute inset-0" />

            <div className="relative">
              <h1 className="inline-flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-5xl font-extrabold text-transparent md:text-6xl">
                Interactive Particle Animation
              </h1>
              <div className="mx-auto mb-8 max-w-3xl">
                <p className="text-lg text-slate-400">
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever.
                </p>
              </div>
              <div className="inline-flex justify-center space-x-4">
                <div>
                  <a
                    className="group inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                    href="#0"
                  >
                    Get Started{" "}
                    <span className="ml-1 tracking-normal text-indigo-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    className="inline-flex justify-center whitespace-nowrap rounded-lg bg-slate-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                    href="#0"
                  >
                    Read the docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/how-to-create-a-beautiful-particle-animation-with-html-canvas/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/particles.tsx"
      />
    </>
  );
}
