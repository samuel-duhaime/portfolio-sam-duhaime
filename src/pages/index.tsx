import { useState } from "react";
import Head from "../components/vendor/next/Head";
import Topbar from "../components/navigations/topbar/Topbar";
import Menu from "../components/navigations/menu/Menu";
import Intro from "../components/sections/intro/Intro";
import Projets from "../components/sections/projets/Projets";
import CV from "../components/sections/cv/CV";
import Contact from "../components/sections/contact/Contact";
import Modal from "../components/vendor/modal/Modal";

export default function App() {
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <div>
         <Head description="Portfolio de Sam Duhaime, développeur web à Montréal, Québec, Canada. Réalisez une application web." />

         <Topbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
         />
         <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
         />

         <div style={{ marginTop: "70px" }}>
            <Intro />
            <Projets />
            <CV />
            <Contact />
            <Modal />
         </div>
      </div>
   );
}
