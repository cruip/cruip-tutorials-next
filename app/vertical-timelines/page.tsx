export const metadata = {
  title: 'Vertical Timelines - Cruip Tutorials',
  description: 'Page description',
}

import VerticalTimeline01 from '@/components/vertical-timeline-01'
import VerticalTimeline02 from '@/components/vertical-timeline-02'
import VerticalTimeline03 from '@/components/vertical-timeline-03'
import Banner from '@/components/banner'

export default function VerticalTimelinePage() {

  const timelineItems01 = [
    {
      date: "May, 2020",
      label: "The origin",
      title: "Acme was founded in Milan, Italy",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },
    {
      date: "May, 2021",
      label: "The milestone",
      title: "Reached 5K customers",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },
    {
      date: "May, 2022",
      label: "The acquisitions",
      title: "Acquired various companies, inluding Technology Inc.",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },
    {
      date: "May, 2023",
      label: "The IPO",
      title: "Acme went public at the New York Stock Exchange",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },            
  ]

  const timelineItems02 = [
    {
      completed: true,
      date: "08/06/2023",
      title: "Order Placed",
      content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
    },
    {
      completed: true,
      date: "09/06/2023",
      title: "Order Shipped",
      content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
    },
    {
      completed: true,
      date: "10/06/2023",
      title: "In Transit",
      content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
    },
    {
      completed: true,
      date: "12/06/2023",
      title: "Out of Delivery",
      content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
    },
    {
      completed: false,
      deliver: true,
      date: "12/08/2023",
      title: "Delivered",
      content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
    },    
  ]
  
  const timelineItems03 = [
    {
      date: "Apr 7, 2024",
      author: "Mark Mikrol",
      type: "open",
      content: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.'
    },
    {
      date: "Apr 7, 2024",
      author: "John Mirkovic",
      type: "comment",
      content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
      date: "Apr 8, 2024",
      author: "Vlad Patterson",
      type: "comment",
      content: "Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Ipsum."
    },
    {
      date: "Apr 8, 2024",
      author: "Mila Capentino",
      type: "comment",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      date: "Apr 9, 2024",
      author: "Mark Mikrol",
      type: "close",
      content: "If you are going to use a passage of Lorem Ipsum!"
    },            
  ]  

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline01 items={timelineItems01} />
            </div>

            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline02 items={timelineItems02} />
            </div>

            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline03 items={timelineItems03} />
            </div>                        

          </div>
        </div>
      </main>
      
      <Banner tutorialUrl="https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/vertical-timeline-01.tsx" />
    </>
  )
}