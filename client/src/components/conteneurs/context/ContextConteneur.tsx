import { useState, useEffect, ReactNode } from "react";
import { AppContext } from "../../../hooks/useContext/AppContext";

type ContextConteneurProps = {
   children: ReactNode;
};

export default function ContextConteneur({ children }: ContextConteneurProps) {
   const [darkMode, setDarkMode] = useState<boolean>(false);
   const [langue, setLangue] = useState<"fr" | "en">("fr");

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
      if (langue === "fr") {
         setLangue("en");
      } else if (langue === "en") {
         setLangue("fr");
      }
   }

   return (
      <AppContext.Provider value={{ darkMode, toggleDarkMode, langue, toggleLangue }}>{children}</AppContext.Provider>
   );
}
