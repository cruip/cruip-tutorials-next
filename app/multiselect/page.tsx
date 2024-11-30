export const metadata = {
  title: "Multiselect - Cruip Tutorials",
  description: "Page description",
};

import MultipleSelector, { Option } from "@/components/multiselect";
import Banner from "@/components/banner";

const frameworks: Option[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    disable: true,
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
    disable: true,
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

export default function MultiselectPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <form>
            <div className="flex justify-center">
              <div className="w-full max-w-sm mx-auto">
                <div className="space-y-2">
                  <MultipleSelector
                    commandProps={{
                      label: "Select frameworks",
                    }}
                    value={frameworks.slice(0, 2)}
                    defaultOptions={frameworks}
                    placeholder="Select frameworks"
                    hideClearAllButton
                    hidePlaceholderWhenSelected
                    emptyIndicator={<p className="text-center text-sm">No results found</p>}
                  />
                </div>
              </div>
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
