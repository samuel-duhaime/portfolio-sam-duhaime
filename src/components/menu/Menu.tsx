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
               <a href="/#">Introduction</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#projets">Projets</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#cv">CV</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#contact">Contact</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a href="/#robotChat">Robot chat</a>
            </li>
         </ul>
      </div>
   );
}
