import { WavingHand } from "../../assets/icons/tsx/WavingHand";
import { RightArrow } from "../../assets/icons/tsx/RightArrow";
import avatar_image from "../../assets/images/Memoji.png?url";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="card group overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-300 text-slate-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 shadow-lg rounded-lg border border-neutral-400 dark:border-neutral-700 align-start flex-none h-full justify-start relative transform w-full transition duration-75 ease-in-out col-span-1 md:col-span-3 md:row-span-4 p-6">
      <div className="flex w-full max-w-7xl justify-center">
        <div className="flex flex-col w-full max-w-4xl items-center gap-4 text-slate-800 dark:text-slate-300 mt-20">
          <div className="flex flex-col w-full h-auto gap-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                easeIn: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h6 className="text-xl font-light m-0">Hello World,</h6>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                easeIn: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="flex flex-row gap-3">
                <h1 className="m-0 font-light text-4xl">
                  I'm <b className="font-bold">Norris Hipolito Jr.</b>
                </h1>
                <WavingHand className="text-5xl" />
              </div>

              <p className="m-0 -mt-2 font-medium text-xl">
                Passionate about creating amazing web experiences.
              </p>
            </motion.div>

            <motion.p
              className="m-0 mt-5 font-normal text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                easeIn: [0, 0.71, 0.2, 1.01],
              }}
            >
              I find joy in both web development and test automation. I'm
              dedicated to enhancing the reliability and efficiency of web
              applications. Crafting smooth user experiences and ensuring
              exceptional quality through careful testing and creative
              solutions.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                easeIn: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.a
                href="./about"
                className="mt-10 flex flex-row bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 max-w-sm text-white font-bold py-2 px-4 rounded justify-between"
                id="knowMeMore"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Know Me More</span>
                <RightArrow className="mt-[0.125rem] h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
        <img
          src={avatar_image}
          className="w-auto max-h-[300px] md:max-h-[500px] select-none absolute right-[-90px] bottom-[-20px] z-[-1] opacity-50 pointer-events-none"
          alt="Norris Memoji"
        />
      </div>
    </div>
  );
};

export default Hero;
