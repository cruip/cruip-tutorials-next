export const metadata = {
  title: 'Modal Video - Cruip Tutorials',
  description: 'Page description',
}

import VideoThumb from '@/public/modal-video-thumb.jpg'
import ModalVideo from '@/components/modal-video'
import Banner from '@/components/banner'

export default function ModalVideoPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">

            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Modal video thumbnail"
              video="/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />

          </div>
        </div>
      </main>

      <Banner tutorialUrl="https://cruip.com/how-to-build-a-modal-video-component-with-tailwind-css-and-next-js/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/modal-video.tsx" />
    </>
  )
}