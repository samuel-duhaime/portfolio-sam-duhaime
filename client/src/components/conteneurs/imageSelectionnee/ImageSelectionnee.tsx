import { useState } from "react";
import Image from "src/components/vendor/next/Image";
import Styles from "./imageSelectionnee.module.scss";

export default function imageSelectionnee() {
  const sectionsArray = [
    { id: 1, nom: "Figma", src: "/assets/images/outils/figma.png" },
    { id: 2, nom: "Canva", src: "/assets/images/outils/canva.png" },
    { id: 3, nom: "DaVinci Resolve", src: "/assets/images/outils/daVinciCode.png" },
    { id: 4, nom: "Visual studio Code", src: "/assets/images/outils/visualStudioCode.png" },
    { id: 5, nom: "Google Analytics", src: "/assets/images/outils/googleAnalytics.png" },
  ];

  const [activeSection, setActiveSection] = useState<string>("Figma");
  const [activeSrc, setActiveSrc] = useState<string>(sectionsArray[0].src);

  return (
    <div className={Styles.imageSelectionnee}>
      <div className={Styles.sections}>
        {sectionsArray.map((section) => {
          return (
            <div
              key={section.id}
              className={activeSection === section.nom ? Styles.active : ""}
              onClick={() => {
                setActiveSection(section.nom);
                setActiveSrc(section.src);
              }}
            >
              {section.nom}
            </div>
          );
        })}
      </div>
      <div className={Styles.imageContainer}>
        <Image
          src={activeSrc}
          alt=""
          width={400}
          height={400}
          placeholder="blur"
          priority={false}
        />
      </div>
    </div>
  );
}
