"use client";

import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "The website builder you're looking for is here";

export default function BlurReveal() {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      <h1 className="mb-6 text-5xl font-bold leading-relaxed text-white md:text-6xl">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="inline-block"
              transition={transition}
              variants={variants}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        ))}
      </h1>
      <motion.p
        className="mb-8 text-xl text-zinc-400"
        transition={transition}
        variants={variants}
      >
        Simple is a modern website builder powered by AI that is changing how
        companies create user interfaces together.
      </motion.p>
      <div className="flex gap-4">
        <motion.div transition={transition} variants={variants}>
          <a
            className="inline-flex justify-center whitespace-nowrap rounded-lg bg-white px-3.5 py-2.5 font-medium text-zinc-800 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-700"
            href="#0"
          >
            Start Free Trial
          </a>
        </motion.div>
        <motion.div transition={transition} variants={variants}>
          <a
            className="inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent px-3.5 py-2.5 font-medium text-zinc-400 transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-700"
            href="#0"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
