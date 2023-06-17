"use client";
import React, { useState } from "react";
import { tutorials } from "./tutorial-links";
import Link from "next/link";

const TutorialCard = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-y-10 sm:grid-cols-1 sm:gap-y-12 lg:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-2  "
            >
              <div className="p-16 flex flex-col justify-center items-center text-2xl font-bold capitalize shadow-xl border border-gray-200 rounded-lg bg-gray-50 w-80 h-60">
                <h1 className="text-xl text-center">{tutorial.name}</h1>
                <h2 className="text-base text-slate-600 text-center"></h2>
                <Link
                  href={tutorial.href}
                  className="mt-10 items-center justify-center w-full p-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none  focus-visible:outline-black text-sm focus-visible:ring-black  "
                >
                  View {tutorial.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
