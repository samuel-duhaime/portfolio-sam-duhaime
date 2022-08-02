import Styles from "./menu.module.scss";

type MenuProps = {
   menuOpen: boolean;
   setMenuOpen: any;
};

export default function Menu({ menuOpen, setMenuOpen }: MenuProps) {
   return (
      <div className={Styles.menu + (menuOpen ? " " + Styles.active : "")}>
         <ul>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#">Intro</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#Projets">Projets</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#CV">CV</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#Contact">Contact</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#ChatBot">ChatBot</a>
            </li>
         </ul>
      </div>
   );
}
