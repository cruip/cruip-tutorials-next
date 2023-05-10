export const metadata = {
  title: 'Modal Video - Cruip Tutorials',
  description: 'Page description',
}

import VideoThumb from '@/public/modal-video-thumb.jpg'
import ModalVideo from '@/components/modal-video'

export default function ModalVideoPage() {
  return (
    <ModalVideo
      thumb={VideoThumb}
      thumbWidth={768}
      thumbHeight={432}
      thumbAlt="Modal video thumbnail"
      video="/video.mp4"
      videoWidth={1920}
      videoHeight={1080} />
  )
}