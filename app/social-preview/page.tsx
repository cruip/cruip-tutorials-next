export const metadata = {
  title: "Social Metadata - Cruip Tutorials",
  description:
    "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
  openGraph: {
    title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
    description:
      "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
    type: "article",
    url: "https://cruip-tutorials-next.vercel.app/social-preview",
    images: [
      {
        url: "https://cruip-tutorials-next.vercel.app/api/og?title=Generate Dynamic Open Graph and Twitter Images in Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
    description:
      "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
    images: [
      "https://cruip-tutorials-next.vercel.app/api/og?title=Generate Dynamic Open Graph and Twitter Images in Next.js",
    ],
  },
};

import Banner from "@/components/banner";

export default function SocialPreviewPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-3xl font-extrabold text-transparent [text-wrap:balance] md:text-4xl">
              Generate Dynamic Open Graph and Twitter Images in Next.js
            </div>
            <p className="mt-4 text-lg text-slate-500">
              Share this page on Facebook and Twitter to see the preview image
            </p>
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-nextjs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/app/api/og/route.tsx"
      />
    </>
  );
}
