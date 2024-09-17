"use client";

import { useRef, useState, useEffect } from "react";
import { useNavProvider } from "./nav-provider";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavigationMenu({
  links,
}: {
  links: { title: string; slug: string }[];
}) {
  const { activeLink, setActiveLink } = useNavProvider();
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [animationProps, setAnimationProps] = useState({
    left: 0,
    width: 0,
  });

  // check if the url has a hash and if so, set the active link
  useEffect(() => {
    const url = window.location.hash;
    if (url) {
      const link = url.replace("#", "");
      setActiveLink(link);
    }
  }, []);

  // update the position and width of the active link underline
  useEffect(() => {
    const updateActiveLink = () => {
      if (activeLinkRef.current) {
        const { width } = activeLinkRef.current.getBoundingClientRect();
        const left = activeLinkRef.current.offsetLeft;
        setAnimationProps({
          left,
          width,
        });
      }
    };

    updateActiveLink();
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [activeLink]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-14 w-full items-center justify-between gap-3 rounded-full border border-gray-100 bg-white px-3 shadow-lg shadow-black/[0.04]">
          <div className="flex flex-1 items-center">
            <a
              className="ml-0.5 inline-flex text-indigo-400 hover:text-indigo-500"
              href="#0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
              >
                <path
                  className="fill-current"
                  fillRule="evenodd"
                  d="m14.862 0 2.763.738-2.073 7.709L21.67 2.35l2.022 2.015-5.656 5.637 8.475-2.263.74 2.753-7.726 2.063L28 14.82l-.74 2.753-7.672-2.05c.095-.412.146-.842.146-1.284 0-3.149-2.561-5.7-5.72-5.7a5.702 5.702 0 0 0-5.572 6.994L0 13.276l.74-2.753 7.726 2.063-6.204-6.183 2.023-2.016 5.656 5.637L7.67 1.58l2.762-.737 2.102 7.817L14.862 0Zm3.294 18.167a5.683 5.683 0 0 0 1.423-2.612l6.157 6.136-2.022 2.015-5.558-5.539Zm-.053.059a5.72 5.72 0 0 1-2.556 1.506l2.022 7.522 2.763-.738-2.23-8.29Zm-4.092 1.712c.493 0 .972-.062 1.428-.179L13.223 28l-2.762-.738 2.024-7.529c.486.134.998.205 1.526.205Zm-1.623-.232a5.721 5.721 0 0 1-2.512-1.528L4.305 23.73l2.022 2.016 6.06-6.04Zm-3.941-4.158a5.682 5.682 0 0 0 1.387 2.58L1.49 20.356l-.74-2.753 7.697-2.055Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <nav className="relative flex justify-center">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-indigo-100"
              aria-hidden="true"
              animate={{
                ...animationProps,
              }}
              transition={{ type: "spring", duration: 0.5 }}
            ></motion.div>
            <ul className="relative flex flex-wrap items-center gap-3 text-sm font-medium md:gap-8">
              {links.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`#${link.slug}`}
                    ref={activeLink === link.slug ? activeLinkRef : null}
                    className={`inline-flex rounded-full px-3 py-1.5 text-slate-500 hover:text-indigo-500 [&.active]:text-indigo-600 ${activeLink === link.slug ? "active" : ""}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-1 items-center justify-end">
            <a
              className="inline-flex justify-center whitespace-nowrap rounded-full bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              href="#0"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
