"use client";
import { useState, useEffect, ReactNode, createContext } from "react";

// Create the App context
export const AppContext = createContext<{
  darkMode: boolean;
  toggleDarkMode: () => void;
  langue: "en" | "fr";
  toggleLangue: () => void;
}>({
  darkMode: false,
  toggleDarkMode: () => {},
  langue: "en",
  toggleLangue: () => {},
});

// App context provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [langue, setLangue] = useState<"fr" | "en">("en");

  // Changer le root variables de SCSS pour le darkMode
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--darkModeBackgroundColor", darkMode ? "black" : "white");
    root?.style.setProperty("--darkModeTextColor", darkMode ? "white" : "black");
    root?.style.setProperty("--boxShadow", darkMode ? "0 1px 5px 0 white" : "0 1px 5px 0 rgba(0, 0, 0, 0.25)");
  }, [darkMode]);

  // Activer ou désactiver le dark mode
  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  // Changer la langue de l'application
  function toggleLangue() {
    if (langue === "en") {
      setLangue("fr");
    } else if (langue === "fr") {
      setLangue("en");
    }
  }

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, langue, toggleLangue }}>{children}</AppContext.Provider>
  );
};
