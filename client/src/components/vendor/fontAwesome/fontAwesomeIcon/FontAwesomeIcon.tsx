import { FontAwesomeIcon as FontAwesomeIconReact } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faTimes, faRobot } from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

// Font Awesome Icon
export default function FontAwesomeIcon({ icon, onClick }: { icon: string; onClick?: () => void }) {
  let iconComponent;

  // Change the iconComponent
  switch (icon) {
    case "faMoon":
      iconComponent = faMoon;
      break;
    case "faSun":
      iconComponent = faSun;
      break;
    case "faTimes":
      iconComponent = faTimes;
    case "faRobot":
      iconComponent = faRobot;
      break;
    default:
      iconComponent = faMoon;
  }

  return (
    <FontAwesomeIconReact
      icon={iconComponent as IconProp}
      onClick={onClick}
    />
  );
}
