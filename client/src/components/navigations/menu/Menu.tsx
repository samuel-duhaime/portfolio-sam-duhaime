import Link from "next/link";
import Styles from "./menu.module.scss";

export default function Menu({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: any }) {
  return (
    <div className={Styles.menu + (menuOpen ? " " + Styles.active : "")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/">Intro</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/#Projects">Projects</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/#CV">CV</Link>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <Link href="/#Contact">Contact</Link>
        </li> */}
      </ul>
    </div>
  );
}
