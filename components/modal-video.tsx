"use client";

import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex justify-center">
      {/* Video thumbnail */}
      <button
        className="group relative flex items-center justify-center rounded-3xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
      >
        <Image
          className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          priority
          alt={thumbAlt}
        />
        {/* Play icon */}
        <svg
          className="pointer-events-none absolute transition-transform duration-300 ease-in-out group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
        >
          <circle
            className="fill-white"
            cx="36"
            cy="36"
            r="36"
            fillOpacity=".8"
          />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg>
      </button>
      {/* End: Video thumbnail */}

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <TransitionChild
            as="div"
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <TransitionChild
            as="div"
            className="fixed inset-0 z-[99999] flex px-4 py-6 md:px-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="mx-auto flex h-full max-w-5xl items-center">
              <DialogPanel className="aspect-video max-h-full w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
                <video
                  ref={videoRef}
                  width={videoWidth}
                  height={videoHeight}
                  loop
                  controls
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </DialogPanel>
            </div>
          </TransitionChild>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
