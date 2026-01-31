import React from "react";
import { motion as Motion } from "framer-motion";
import clsx from "clsx";

/**
 * Reusable Card component
 * Supports hover + focus states
 */
const Card = ({ children, className }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={clsx(
        "bg-background text-textPrimary rounded-md shadow-subtle p-6 transition-transform duration-200 ease-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent",
        className
      )}
    >
      {children}
    </Motion.div>
  );
};

export default Card;