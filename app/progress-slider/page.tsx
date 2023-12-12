export const metadata = {
  title: 'Slider with Progress Indicator - Cruip Tutorials',
  description: 'Page description',
}

import SilderImg01 from '@/public/ps-image-01.png'
import SilderImg02 from '@/public/ps-image-02.png'
import SilderImg03 from '@/public/ps-image-03.png'
import SilderImg04 from '@/public/ps-image-04.png'
import SilderIcon01 from '@/public/ps-icon-01.svg'
import SilderIcon02 from '@/public/ps-icon-02.svg'
import SilderIcon03 from '@/public/ps-icon-03.svg'
import SilderIcon04 from '@/public/ps-icon-04.svg'
import ProgressSlider from '@/components/progress-slider'
import Banner from '@/components/banner'

export default function ProgressSliderPage() {  

  const items = [
    {
      img: SilderImg01,
      desc: 'Omnichannel',
      buttonIcon: SilderIcon01,
    },
    {
      img: SilderImg02,
      desc: 'Multilingual',
      buttonIcon: SilderIcon02,
    },
    {
      img: SilderImg03,
      desc: 'Interpolate',
      buttonIcon: SilderIcon03,
    },
    {
      img: SilderImg04,
      desc: 'Enriched',
      buttonIcon: SilderIcon04,
    }, 
  ]

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">

            <ProgressSlider items={items} />

          </div>
        </div>
      </main>

      <Banner tutorialUrl="https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-nextjs/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/progress-slider.tsx" />
    </>
  )
}