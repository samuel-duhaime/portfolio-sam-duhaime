import { useState } from "react";
import Image from "src/components/vendor/next/Image";
import Styles from "./imageSelectionnee.module.scss";

// Images section selector 
export default function imageSelectionnee() {
  const sectionsArray = [
    { id: 1, nom: "Figma", src: "/assets/images/outils/figma.png" },
    { id: 2, nom: "Canva", src: "/assets/images/outils/canva.png" },
    { id: 3, nom: "GitHub", src: "/assets/images/outils/github.png" },
    { id: 4, nom: "Visual Studio Code", src: "/assets/images/outils/VSC.png" },
    { id: 5, nom: "Insomnia", src: "/assets/images/outils/insomnia.png" },
  ];

  const [activeSection, setActiveSection] = useState<string>("Figma");
  const [activeSrc, setActiveSrc] = useState<string>(sectionsArray[0].src);

  return (
    <div className={Styles.imageSelectionnee}>
      <div className={Styles.sections}>
        {sectionsArray.map((section) => {
          return (
            <button
              key={section.id}
              className={activeSection === section.nom ? Styles.active : ""}
              onClick={() => {
                setActiveSection(section.nom);
                setActiveSrc(section.src);
              }}
            >
              {section.nom}
            </button>
          );
        })}
      </div>
      <div className={Styles.imageContainer}>
        <Image
          src={activeSrc}
          alt={activeSection}
          width={400}
          height={400}
          sizes="(min-width: 1000px) 400px, 240px"
          placeholder="blur"
          priority={false}
        />
      </div>
    </div>
  );
}
