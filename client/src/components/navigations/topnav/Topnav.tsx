"use client";
import { useContext } from "react";
import Link from "next/link";
import { AppContext } from "src/components/conteneurs/context/AppContext";
import FontAwesomeIcon from "../../vendor/fontAwesome/fontAwesomeIcon/FontAwesomeIcon";
import Styles from "./topnav.module.scss";

export default function TopNav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: any }) {
  const { darkMode, toggleDarkMode, langue, toggleLangue } = useContext(AppContext);

  return (
    <div className={Styles.topbar + (menuOpen ? " " + Styles.active : "")}>
      <div className={Styles.wrapper}>
        <div className={Styles.left}>
          <Link
            href="/"
            className={Styles.logoText}
          >
            Sam<span className={Styles.red}>.</span>
          </Link>
        </div>
        <div className={Styles.right}>
          <div className={`${Styles.langue} ${menuOpen && Styles.menuOpen}`}>
            <button
              className={`${menuOpen && Styles.menuOpen} ${langue === "fr" && Styles.active}`}
              onClick={toggleLangue}
            >
              fr
            </button>{" "}
            |{" "}
            <button
              className={`${menuOpen && Styles.menuOpen} ${langue === "en" && Styles.active}`}
              onClick={toggleLangue}
            >
              en
            </button>
          </div>
          <div className={`${Styles.displayIcone} ${menuOpen && Styles.menuOpen}`}>
            <FontAwesomeIcon
              icon={darkMode === true ? "faSun" : "faMoon"}
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
