import { useContext } from "react";
import { AppContext } from "src/hooks/useContext/AppContext";
import FontAwesomeIcon from "../../vendor/fontAwesome/fontAwesomeIcon/FontAwesomeIcon";
import Styles from "./topbar.module.scss";

type TopBarProps = {
   menuOpen: boolean;
   setMenuOpen: any;
};

export default function Topbar({ menuOpen, setMenuOpen }: TopBarProps) {
   const { darkMode, toggleDarkMode, langue, toggleLangue } = useContext(AppContext);

   return (
      <div className={Styles.topbar + (menuOpen ? " " + Styles.active : "")}>
         <div className={Styles.wrapper}>
            <div className={Styles.left}>
               <a
                  href="#intro"
                  className={Styles.logoText}
               >
                  Sam<span className={Styles.red}>.</span>
               </a>
            </div>
            <div className={Styles.right}>
               <div className={Styles.langue}>
                  <span
                     className={langue === "fr" ? Styles.active : ""}
                     onClick={toggleLangue}
                  >
                     fr
                  </span>{" "}
                  |{" "}
                  <span
                     className={langue === "en" ? Styles.active : ""}
                     onClick={toggleLangue}
                  >
                     en
                  </span>
               </div>
               <div className={Styles.displayIcone}>
                  <FontAwesomeIcon
                     icon={darkMode ? "faSun" : "faMoon"}
                     onClick={toggleDarkMode}
                  />
               </div>
               <div
                  className={Styles.hamburger}
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  <span className={Styles.line1}></span>
                  <span className={Styles.line2}></span>
                  <span className={Styles.line3}></span>
               </div>
            </div>
         </div>
      </div>
   );
}
