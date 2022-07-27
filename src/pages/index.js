import { useState } from "react";
import Topbar from "../components/topbar/Topbar";
import Accueil from "../components/accueil/Accueil";
import Portfolio from "../components/portfolio/Portfolio";
import Works from "../components/works/Works";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Menu from "../components/menu/Menu";
import Styles from "./app.module.scss";

export default function App() {
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <div className={Styles.app}>
         <Topbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
         />
         <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
         />
         <div className={Styles.sections}>
            <div className={Styles.section}>
               <Accueil />
            </div>
            <div className={Styles.section}>
               <Portfolio />
            </div>
            <div className={Styles.section}>
               <Works />
            </div>
            <div className={Styles.section}>
               <Testimonials />
            </div>
            <div className={Styles.section}>
               <Contact />
            </div>
         </div>
      </div>
   );
}
