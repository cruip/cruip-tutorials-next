import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

interface TimelineItemProps {
  date: string;
  author: string;
  type: string;
  content: string;
}

export default function VerticalTimeline03({
  items,
}: {
  items: TimelineItemProps[];
}) {
  const typeText = (type: string): string => {
    switch (type) {
      case "open":
        return "opened the request";
      case "close":
        return "closed the request";
      case "comment":
        return "commented the request";
      default:
        return "";
    }
  };

  return (
    <div
      className={`${caveat.variable} relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0`}
    >
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="mb-3 items-center md:flex md:space-x-4">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                {item.type === "comment" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      className="fill-slate-300"
                      d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                    />
                    <path
                      className="fill-slate-500"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className={`${item.type === "close" ? "fill-red-500" : "fill-emerald-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                )}
              </div>
              {/* Date */}
              <time className="font-caveat text-xl font-medium text-indigo-500 md:w-28">
                {item.date}
              </time>
            </div>
            {/* Title */}
            <div className="ml-14 text-slate-500">
              <span className="font-bold text-slate-900">{item.author}</span>{" "}
              {typeText(item.type)}
            </div>
          </div>
          {/* Card */}
          <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
