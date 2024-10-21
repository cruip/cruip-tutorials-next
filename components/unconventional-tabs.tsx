"use client";

import { useState, Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

interface Tab {
  title: string;
  img: StaticImageData;
  tag: string;
  excerpt: string;
  link: string;
}

export default function UnconventionalTabs({ tabs }: { tabs: Tab[] }) {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
      <div className={`${caveat.variable}`}>
        {/* Buttons */}
        <div className="flex justify-center">
          <TabList className="mb-8 inline-flex flex-wrap justify-center rounded-[20px] bg-slate-200 p-1 max-[480px]:max-w-[180px] min-[480px]:mb-12">
            {tabs.map((tab, index) => (
              <Tab key={index} as={Fragment}>
                <button
                  className={`h-8 flex-1 whitespace-nowrap rounded-2xl px-4 text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 ${selectedTab === index ? "bg-white text-slate-900" : "text-slate-600 hover:text-slate-900"}}`}
                >
                  {tab.title}
                </button>
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Tab panels */}
        <TabPanels className="mx-auto max-w-[640px]">
          <div className="relative flex flex-col">
            {tabs.map((tab, index) => (
              <TabPanel key={index} as={Fragment} static={true}>
                <Transition show={selectedTab === index}>
                  <article className="w-full items-stretch rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 min-[480px]:flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-12">    
                    <figure className="p-2 min-[480px]:w-1/2">
                      <Image
                        className="h-[180px] w-full rounded-lg object-cover min-[480px]:h-full"
                        width="304"
                        height="214"
                        src={tab.img}
                        alt={tab.title}
                      />
                    </figure>
                    <div className="flex flex-col justify-center p-5 pl-3 min-[480px]:w-1/2">
                      <div className="mb-1 flex justify-between">
                        <header>
                          <div className="font-caveat text-xl font-medium text-sky-500">
                            {tab.tag}
                          </div>
                          <h1 className="text-xl font-bold text-slate-900">
                            {tab.title}
                          </h1>
                        </header>
                        <button
                          className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-slate-200 shadow transition-colors duration-150 ease-in-out hover:border-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                          aria-label="Like"
                        >
                          <svg
                            className="fill-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="13"
                          >
                            <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="mb-2 line-clamp-3 text-sm text-slate-500">
                        {tab.excerpt}
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-indigo-500 transition-colors duration-150 ease-out hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                          href={tab.link}
                        >
                          Read more -&gt;
                        </a>
                      </div>
                    </div>
                  </article>
                </Transition>
              </TabPanel>
            ))}
          </div>
        </TabPanels>
      </div>
    </TabGroup>
  );
}
