import Link from "next/link";
import Styles from "./menu.module.scss";
import FontAwesomeIcon from "../../vendor/fontAwesome/fontAwesomeIcon/FontAwesomeIcon";

export default function Menu({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: any }) {
  // Handle Scroll when clicking a link of the menu
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();

    const element = document.getElementById(targetId); // Get the target element

    /* Scroll to the target */
    element?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false); // Close the menu
  };

  return (
    <div className={Styles.menu + (menuOpen ? " " + Styles.active : "")}>
      {/* Top menu links */}
      <ul className={Styles.links}>
        <Link
          href="/"
          onClick={(e) => handleScroll(e, "Intro")}
        >
          <li>Intro</li>
        </Link>
        <Link
          href="/#Projects"
          onClick={(e) => handleScroll(e, "Projects")}
        >
          <li>Projects</li>
        </Link>

        <Link
          href="/#CV"
          onClick={(e) => handleScroll(e, "CV")}
        >
          <li>CV</li>
        </Link>
        {/* <li onClick={() => setMenuOpen(false)}>
          <Link href="/#Contact">Contact</Link>
        </li> */}
      </ul>

      <div className={Styles.icons}>
        <a
          className={Styles.icon}
          href="https://www.linkedin.com/in/samuel-duhaime-morissette"
        >
          <FontAwesomeIcon icon="faLinkedin" />
        </a>

        <a
          className={Styles.icon}
          href="https://github.com/samuel-duhaime"
        >
          <FontAwesomeIcon icon="faGithub" />
        </a>
      </div>
    </div>
  );
}
