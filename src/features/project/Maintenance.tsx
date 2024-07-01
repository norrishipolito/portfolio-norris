import React from "react";
import { motion } from "framer-motion";
import MaintenanceLogo from "../../assets/icons/tsx/MaintenanceReact";

type Props = {};

const Maintenance = ({}: Props) => {
  return (
    <motion.div
      className="flex flex-col w-full items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <MaintenanceLogo className="-mt-4 h-10 w-10 md:h-12 md:w-12 text-gray-600 dark:text-gray-300" />
      <h1 className="flex flex-row md:text-4xl font-bold text-gray-600 dark:text-gray-300 gap-1 text-2xl">
        🚧Page is Under Construction🚧
      </h1>
    </motion.div>
  );
};

export default Maintenance;
