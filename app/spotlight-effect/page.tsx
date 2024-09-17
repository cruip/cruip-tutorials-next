export const metadata = {
  title: "Spotlight Effect - Cruip Tutorials",
  description: "Page description",
};

import Image from "next/image";
import Card01 from "@/public/card-01.png";
import Card02 from "@/public/card-02.png";
import Card03 from "@/public/card-03.png";
import Spotlight, { SpotlightCard } from "@/components/spotlight";
import Banner from "@/components/banner";

export default function SpotlightPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 p-6 pb-8">
                {/* Radial gradient */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]"></div>
                </div>
                <div className="flex h-full flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-600 blur-3xl"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card01}
                      width={200}
                      height={200}
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="mb-5 grow">
                    <h2 className="mb-1 text-xl font-bold text-slate-200">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-500">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                    href="#0"
                  >
                    <svg
                      className="mr-2 fill-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #2 */}
            <SpotlightCard>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 p-6 pb-8">
                {/* Radial gradient */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]"></div>
                </div>
                <div className="flex h-full flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-600 blur-3xl"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card02}
                      width={200}
                      height={200}
                      alt="Card 02"
                    />
                  </div>
                  {/* Text */}
                  <div className="mb-5 grow">
                    <h2 className="mb-1 text-xl font-bold text-slate-200">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-500">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                    href="#0"
                  >
                    <svg
                      className="mr-2 fill-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #3 */}
            <SpotlightCard>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 p-6 pb-8">
                {/* Radial gradient */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]"></div>
                </div>
                <div className="flex h-full flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-600 blur-3xl"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src={Card03}
                      width={200}
                      height={200}
                      alt="Card 03"
                    />
                  </div>
                  {/* Text */}
                  <div className="mb-5 grow">
                    <h2 className="mb-1 text-xl font-bold text-slate-200">
                      Amazing Integration
                    </h2>
                    <p className="text-sm text-slate-500">
                      Quickly apply filters to refine your issues lists and
                      create custom views.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                    href="#0"
                  >
                    <svg
                      className="mr-2 fill-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Spotlight>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/how-to-create-a-spotlight-card-hover-effect-with-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/spotlight.tsx"
      />
    </>
  );
}
