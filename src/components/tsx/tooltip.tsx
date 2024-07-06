import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTooltip = ({
  items,
  imgClassName,
  imgWidth,
  imgHeight,
}: {
  items: {
    id: number;
    href: string;
    name: string;
    src: string;
    darkSrc?: string;
  };
  imgClassName?: string;
  imgWidth?: string;
  imgHeight?: string;
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem("theme") === "dark");
    const handleStorage = () => {
      if (localStorage.getItem("theme") === "dark") {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className="group relative mt-2"
        key={items.name}
        onMouseEnter={() => setHoveredIndex(items.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === items.id && (
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15 },
              }}
              className="absolute -left-1/2 -top-8 z-50 flex flex-col items-center justify-center rounded-md bg-zinc-950 px-4 py-2 text-xs shadow-xl"
            >
              <div className="text-white text-md">{items.name}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <a href={items.href} target="_blank" rel="noreferrer">
          <img
            src={isDarkTheme ? items.src : items.darkSrc ?? items.src}
            alt={items.name}
            className={
              "relative !m-0 h-[2.25rem] w-[2.25rem] object-cover object-center !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
            }
          />
        </a>
      </div>
    </>
  );
};
