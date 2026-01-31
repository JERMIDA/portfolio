import { useEffect, useState } from "react";

/**
 * Custom hook for dark mode
 * - Respects system preference
 * - Persists choice in localStorage
 */
export default function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    const stored = localStorage.getItem("dark-mode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setEnabled];
}