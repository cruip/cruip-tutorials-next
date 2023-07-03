export const metadata = {
    title: 'Unconventional Tabs - Cruip Tutorials',
    description: 'Page description',
  }
  
  import TabImage01 from '@/public/tabs-image-01.jpg'
  import Tab0Image2 from '@/public/tabs-image-02.jpg'
  import Tab0Image3 from '@/public/tabs-image-03.jpg'
  import UnconventionalTabs from '@/components/unconventional-tabs'
  import Banner from '@/components/banner'
  
  export default function UnconventionalTabsPage() {
  
    const tabs = [
      {
        title: 'Lassen Peak',
        img: TabImage01,
        tag: 'Mountain',
        excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: '#0'
      },
      {
        title: 'Mount Shasta',
        img: Tab0Image2,
        tag: 'Mountain',
        excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: '#0'
      },
      {
        title: 'Eureka Peak',
        img: Tab0Image3,
        tag: 'Mountain',
        excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link: '#0'
      },
    ]
  
    return (
      <>
        <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <UnconventionalTabs tabs={tabs} />
          </div>
        </main>
        
        <Banner tutorialUrl="https://cruip.com/using-tailwind-css-and-next-js-to-create-animated-and-accessible-tabs/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/unconventional-tabs.tsx" />
      </>
    )
  }