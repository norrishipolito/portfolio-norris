import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../shared/constants";
import { LineMdCoffeeLoop } from "../../assets/icons/tsx/CoffeeReact";
import { LineMdLaptop } from "../../assets/icons/tsx/LaptopReact";
import { LineMdPerson } from "../../assets/icons/tsx/PersonReact";

type Props = {};

function Hamburger({}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  const listVariants = {
    closed: {
      x: "-100vw",
    },
    opened: {
      x: 0,
      transition: {
        easeInOut: "linear",
        duration: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="block md:hidden">
      {/* MENU BUTTON */}
      <button
        className="relative z-50 flex h-5 w-7 flex-col justify-between"
        onClick={() => setOpen((prev) => !prev)}
        title="Open Menu"
      >
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className={
            "h-[2px] w-7 origin-left rounded-sm bg-gray-600 dark:bg-slate-50"
          }
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="h-[2px] w-7 rounded-sm bg-gray-600 dark:bg-slate-50"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className={
            "h-[2px] w-7 origin-left rounded-sm bg-gray-600 dark:bg-slate-50"
          }
        ></motion.div>
      </button>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="fixed left-0 top-0 z-40 flex h-[100svh] w-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-300 to-zinc-50 text-slate-800 dark:text-white dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800 pb-10 text-4xl"
        >
          <div className="z-50 flex flex-1 flex-col items-center justify-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.label}
              >
                <a
                  href={link.href}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  {index === 0 && <LineMdCoffeeLoop className="h-7 w-7" />}

                  {index === 1 && <LineMdPerson className="h-7 w-7" />}

                  {index === 2 && <LineMdLaptop className="h-7 w-7" />}
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Hamburger;
