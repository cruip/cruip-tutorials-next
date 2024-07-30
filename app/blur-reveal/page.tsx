export const metadata = {
  title: 'Sliding Text - Cruip Tutorials',
  description: 'Page description',
}

import BlurReveal from '@/components/blur-reveal'
import Banner from '@/components/banner'

export default function BlurRevealPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-zinc-950 overflow-hidden">

        <div className="absolute top-0 left-0 w-[1000px] h-[600px] bg-[radial-gradient(closest-side,var(--tw-gradient-stops))] from-white/[0.05] to-transparent rounded-full rotate-45" aria-hidden="true"></div>
        <div className="absolute -top-20 left-20 w-[1000px] h-[200px] bg-[radial-gradient(closest-side,var(--tw-gradient-stops))] from-white/[0.03] to-transparent rounded-full rotate-45" aria-hidden="true"></div>

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="max-w-3xl mx-auto">

            <BlurReveal />

          </div>
        </div>
      </main>

      <Banner tutorialUrl="https://cruip.com/blur-reveal-effect-with-framer-motion-and-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/blur-reveal.tsx" />
    </>
  )
}