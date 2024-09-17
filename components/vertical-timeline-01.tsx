import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

interface TimelineItemProps {
  date: string;
  label: string;
  title: string;
  content: string;
}

export default function VerticalTimeline01({
  items,
}: {
  items: TimelineItemProps[];
}) {
  return (
    <div className={`${caveat.variable} -my-6`}>
      {items.map((item, index) => (
        <div key={index} className="group relative py-6 pl-8 sm:pl-32">
          {/* Purple label */}
          <div className="mb-1 font-caveat text-2xl font-medium text-indigo-500 sm:mb-0">
            {item.label}
          </div>
          {/* Time + Title */}
          <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
            <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
              {item.date}
            </time>
            <div className="text-xl font-bold text-slate-900">{item.title}</div>
          </div>
          {/* Description */}
          <div className="text-slate-500">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
