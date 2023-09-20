export const metadata = {
  title: 'Sticky Scrolling Effect - Cruip Tutorials',
  description: 'Page description',
}

import Image from 'next/image'
import Illustration01 from '@/public/illustration-01.png'
import Illustration02 from '@/public/illustration-02.png'
import Illustration03 from '@/public/illustration-03.png'
import Illustration04 from '@/public/illustration-04.png'
import StickyScrolling from '@/components/sticky-scrolling'
import Banner from '@/components/banner'

export default function StickyScrollingPage() {

  const sections = [
    {
      img: Illustration01,
      label: 'Integrated Knowledge',
      title: 'Support your users with popular topics',
      text: 'Statistics show that people browsing your webpage who receive live assistance with a chat widget are more likely to make a purchase.'
    },    
    {
      img: Illustration02,
      label: 'Authentic Experiences',
      title: 'Personalise the support experience',
      text: 'Statistics show that people browsing your webpage who receive live assistance with a chat widget are more likely to make a purchase.'
    },
    {
      img: Illustration03,
      label: 'Live Assistance',
      title: 'Scale your sales using automation',
      text: 'Statistics show that people browsing your webpage who receive live assistance with a chat widget are more likely to make a purchase.'
    },    
    {
      img: Illustration04,
      label: 'Satisfaction Guaranteed',
      title: 'Make customer satisfaction easier',
      text: 'Statistics show that people browsing your webpage who receive live assistance with a chat widget are more likely to make a purchase.'
    },
  ]

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden supports-[overflow:clip]:overflow-clip">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">

          <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-4xl font-bold text-slate-300 text-center">
            Scroll down
          </div>

          <StickyScrolling className="max-w-md mx-auto lg:max-w-none lg:min-h-[var(--stick-items)] hidden">
            <div className="lg:sticky lg:top-0 lg:h-screen space-y-16 lg:space-y-0">

              {sections.map((section, index) => (
                <section className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)]" key={index} style={{ '--stick-visibility': 0, '--stick-scale': 0.8 } as any}>
                  <div className="flex flex-col lg:h-full lg:flex-row space-y-4 space-y-reverse lg:space-y-0 lg:space-x-20">
                    <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                      <div className="space-y-3">
                        <div className="relative inline-flex text-indigo-500 font-semibold">
                          {section.label}
                          <svg className="fill-indigo-300 absolute top-full w-full" xmlns="http://www.w3.org/2000/svg" width="166" height="4">
                            <path d="M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z" />
                          </svg>
                        </div>
                        <h2 className="text-4xl text-slate-900 font-extrabold">{section.title}</h2>
                        <p className="text-lg text-slate-500">{section.text}</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300">
                      <Image width="512" height="480" src={section.img} alt={section.title} />
                    </div>
                  </div>
                </section>
              ))}

            </div>
          </StickyScrolling>

          <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-4xl font-bold text-slate-300 text-center">
            Scroll up
          </div>

        </div>

      </main>

      <Banner tutorialUrl="https://cruip.com/how-to-create-a-sticky-on-scroll-effect-with-javascript/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/sticky-scrolling.tsx" />
    </>
  )
}