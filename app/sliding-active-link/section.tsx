"use client";

import { useRef, useEffect } from "react";
import { useNavProvider } from "./nav-provider";
import { useInView } from "framer-motion";

export default function PageSection({
  section,
}: {
  section: { title: string; slug: string };
}) {
  const ref = useRef(null);
  const { setActiveLink } = useNavProvider();

  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug);
    }
  }, [isInView]);

  return (
    <section
      id={section.slug}
      ref={ref}
      className="flex h-screen items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-slate-300">{section.title}</h2>
    </section>
  );
}
