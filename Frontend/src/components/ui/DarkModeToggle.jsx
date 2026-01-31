import React from "react";
import Button from "./Button";
import useDarkMode from "../../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useDarkMode();

  return (
    <Button
      variant="ghost"
      onClick={() => setEnabled(!enabled)}
      className="ml-4"
    >
      {enabled ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
};

export default DarkModeToggle;