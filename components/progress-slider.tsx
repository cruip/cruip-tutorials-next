"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

interface Item {
  img: StaticImageData;
  desc: string;
  buttonIcon: StaticImageData;
}

export default function ProgressSlider({ items }: { items: Item[] }) {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="mx-auto w-full max-w-5xl text-center">
      {/* Item image */}
      <div className="transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Image
                className="rounded-xl"
                src={item.img}
                width={1024}
                height={576}
                alt={item.desc}
              />
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-4 sm:max-w-sm md:max-w-3xl md:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={index}
            className="group rounded p-2 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`flex flex-col items-center text-center ${active === index ? "" : "opacity-50 transition-opacity group-hover:opacity-100 group-focus:opacity-100"}`}
            >
              <span className="relative mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="mb-2 block text-sm font-medium text-slate-900">
                {item.desc}
              </span>
              <span
                className="relative block h-1 w-full rounded-full bg-slate-200"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 rounded-[inherit] bg-indigo-500"
                  style={{ width: active === index ? `${progress}%` : "0%" }}
                ></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
