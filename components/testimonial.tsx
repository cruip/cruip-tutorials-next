import Image, { StaticImageData } from "next/image";

type TestimonialProps = {
  testimonial: {
    img: StaticImageData;
    name: string;
    username: string;
    date: string;
    content: string;
  };
};

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            className="shrink-0 rounded-full"
            src={testimonial.img}
            width={44}
            height={44}
            alt={testimonial.name}
          />
          <div>
            <div className="font-bold leading-tight text-slate-900">
              {testimonial.name}
            </div>
            {testimonial.username ? (
              <div>
                <a
                  className="text-sm font-medium text-slate-500 transition hover:text-indigo-500"
                  href="#0"
                >
                  {testimonial.username}
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <a
          className="mt-1 shrink-0 text-indigo-500 transition hover:text-indigo-600"
          href="#0"
          tabIndex={-1}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={15}
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
            />
          </svg>
        </a>
      </header>
      <div className="grow text-sm text-slate-600">{testimonial.content}</div>
      <footer className="mt-4 flex items-center gap-2.5 text-slate-500">
        <div className="text-xs">{testimonial.date}</div>
      </footer>
    </article>
  );
}
