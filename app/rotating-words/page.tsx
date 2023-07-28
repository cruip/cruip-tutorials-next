export const metadata = {
  title: 'Rotating Words - Cruip Tutorials',
  description: 'Page description',
}

import RotatingWords from '@/components/rotating-words'
import Banner from '@/components/banner'

export default function ModalVideoPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">

            <RotatingWords />

          </div>
        </div>
      </main>

      <Banner tutorialUrl="https://cruip.com/how-to-create-a-rotating-words-animation-with-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/rotating-words.tsx" />
    </>
  )
}