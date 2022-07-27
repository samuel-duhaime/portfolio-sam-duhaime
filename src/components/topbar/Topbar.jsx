import Styles from "./topbar.module.scss";
// import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
   return (
      <div className={Styles.topbar + (menuOpen ? " " + Styles.active : "")}>
         <div className={Styles.wrapper}>
            <div className={Styles.left}>
               <a
                  href="#accueil"
                  className={Styles.logo}
               >
                  Sam<span className={Styles.red}>.</span>
               </a>
            </div>
            <div className={Styles.right}>
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
