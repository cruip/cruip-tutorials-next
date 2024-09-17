"use client";

import React, { useRef, useEffect, useState } from "react";

type StickyScrollingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function StickyScrolling({
  children,
  className = "",
}: StickyScrollingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerProps = useRef<{
    height: number;
    top: number;
    bottom: number;
  }>({
    height: 0,
    top: 0,
    bottom: 0,
  });
  const [sections, setSections] = useState<Array<HTMLElement>>([]);
  const viewportTop = useRef<number>(0);
  const activeIndex = useRef<number>(0);
  const scrollValue = useRef<number>(0);

  useEffect(() => {
    containerRef.current &&
      setSections(
        Array.from(containerRef.current.querySelectorAll("section")).map(
          (el) => el as HTMLElement,
        ),
      );
  }, []);

  useEffect(() => {
    initContainer();
    handleSections();

    window.addEventListener("scroll", handleSections);

    return () => {
      window.removeEventListener("scroll", handleSections);
    };
  }, [sections]);

  const initContainer = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--stick-items",
        `${sections.length + 1}00vh`,
      );
      containerRef.current.classList.remove("hidden");
    }
  };

  const handleSections = () => {
    if (containerRef.current && sections) {
      viewportTop.current = window.scrollY;
      containerProps.current.height = containerRef.current.clientHeight;
      containerProps.current.top = containerRef.current.offsetTop;
      containerProps.current.bottom =
        containerProps.current.top + containerProps.current.height;

      if (containerProps.current.bottom <= viewportTop.current) {
        // The bottom edge of the stickContainer is above the viewport
        scrollValue.current = sections.length + 1;
      } else if (containerProps.current.top >= viewportTop.current) {
        // The top edge of the stickContainer is below the viewport
        scrollValue.current = 0;
      } else {
        // The stickContainer intersects with the viewport
        scrollValue.current = remapValue(
          viewportTop.current,
          containerProps.current.top,
          containerProps.current.bottom,
          0,
          sections.length + 1,
        );
      }
      activeIndex.current =
        Math.floor(scrollValue.current) >= sections.length
          ? sections.length - 1
          : Math.floor(scrollValue.current);

      sections.forEach((section, i) => {
        if (i === activeIndex.current) {
          section.style.setProperty("--stick-visibility", "1");
          section.style.setProperty("--stick-scale", "1");
        } else {
          section.style.setProperty("--stick-visibility", "0");
          section.style.setProperty("--stick-scale", ".8");
        }
      });
    }
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number,
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}
