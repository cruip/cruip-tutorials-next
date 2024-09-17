export const metadata = {
  title: "Modal Video - Cruip Tutorials",
  description: "Page description",
};

import VideoThumb from "@/public/modal-video-thumb.jpg";
import ModalVideo from "@/components/modal-video";
import Banner from "@/components/banner";

export default function ModalVideoPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="flex justify-center">
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Modal video thumbnail"
              video="/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/how-to-build-a-modal-video-component-with-tailwind-css-and-next-js/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/modal-video.tsx"
      />
    </>
  );
}
