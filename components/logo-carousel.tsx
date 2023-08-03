import Image from 'next/image'
import Facebook from '@/public/facebook.svg'
import Disney from '@/public/disney.svg'
import Airbnb from '@/public/airbnb.svg'
import Apple from '@/public/apple.svg'
import Spark from '@/public/spark.svg'
import Samsung from '@/public/samsung.svg'
import Quora from '@/public/quora.svg'
import Sass from '@/public/sass.svg'

export default function LogoCarousel() {

  const logos = [
    { src: Facebook, alt: 'Facebook' },
    { src: Disney, alt: 'Disney' },
    { src: Airbnb, alt: 'Airbnb' },
    { src: Apple, alt: 'Apple' },
    { src: Spark, alt: 'Spark' },
    { src: Samsung, alt: 'Samsung' },
    { src: Quora, alt: 'Quora' },
    { src: Sass, alt: 'Sass' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}