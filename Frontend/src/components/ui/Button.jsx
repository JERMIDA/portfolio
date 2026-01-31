import React from "react";
import { motion as Motion } from "framer-motion";
import clsx from "clsx";

/**
 * Reusable Button component
 * Variants: primary, outline, ghost
 * Accessible, keyboard-friendly, responsive
 */

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-2 text-inherit" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const Button = ({
  children,
  variant = "primary",
  className,
  loading = false,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium px-5 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed shadow-subtle";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent bg-transparent",
    ghost:
      "text-accent hover:bg-accent/10 focus:ring-accent bg-transparent",
  };

  return (
    <Motion.button
      whileTap={!disabled && !loading ? { scale: 0.97 } : false}
      className={clsx(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </Motion.button>
  );
};

export default Button;