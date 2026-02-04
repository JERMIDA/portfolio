import React from "react";
import clsx from "clsx";

/**
 * Badge component for skills or tags
 */
const Badge = ({ children, className }) => {
  return (
    <span
      className={clsx(
        // Responsive: smaller padding and font on mobile
        "inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-accent/10 text-accent text-xs sm:text-sm font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;