export const metadata = {
  title: 'Social Metadata - Cruip Tutorials',
  description:
    "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
  openGraph: {
    title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
    description:
      "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
    type: "article",
    url: "https://cruip-tutorials-next.vercel.app/blog/nextjs13-seo",
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
}

import Banner from '@/components/banner'

export default function SocialMetadataPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">

            <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Generate Dynamic Open Graph and Twitter Images in Next.js</div>
            <p className="text-lg text-slate-500 mt-4">Share this page on Facebook and Twitter to see the preview image</p>

          </div>
        </div>
      </main>

      <Banner tutorialUrl="https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-nextjs/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/app/social-preview/page.tsx" />
    </>
  )
}