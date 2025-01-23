"use client";

// import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avec next-themes, on attend le "montage" pour avoir un rendu cohérent
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="relative group p-2 border border-foreground 
                     rounded-full cursor-not-allowed"
      aria-disabled="true"
    >
      {/* Icône forcée : Moon */}
      <Moon className="text-gray-400" />

      {/* Tooltip au survol */}
      <span
        className="absolute top-full left-1/2 z-10 hidden 
                       -translate-x-1/2 pt-1 group-hover:block"
      >
        <span
          className="rounded-md bg-gray-700 px-2 py-1 
                         text-sm text-white shadow-lg"
        >
          Light mode en cours de développement
        </span>
      </span>
    </button>
  );
}
