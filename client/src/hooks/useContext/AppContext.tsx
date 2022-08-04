import { createContext } from "react";

export const AppContext = createContext({
   darkMode: false,
   toggleDarkMode: () => {},
   langue: "fr",
   toggleLangue: () => {},
});