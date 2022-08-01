import { useState } from "react";
import Head from "src/components/vendor/next/Head";
import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Projets from "../components/projets/Projets";
import CV from "src/components/cv/CV";
// import Contact from "../components/contact/Contact";
import Menu from "../components/menu/Menu";

export default function App() {
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <>
         <Head description="Portfolio de Sam Duhaime, développeur web à Montréal, Québec, Canada. Réalisez une application web." />

         <Topbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
         />
         <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
         />
         <div style={{ marginTop: "70px" }} />
         <Intro />
         <Projets />
         <CV />
         {/* <Contact /> */}
      </>
   );
}
