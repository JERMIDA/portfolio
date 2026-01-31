import React from "react";
import clsx from "clsx";

/**
 * Badge component for skills or tags
 */
const Badge = ({ children, className }) => {
  return (
    <span
      className={clsx(
        "inline-block px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;