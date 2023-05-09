import { useContext } from "react";
import { AppContext } from "src/components/conteneurs/context/AppContext";
import Heading from "../../tags/heading/Heading";
import Styles from "./projets.module.scss";

export default function Portfolio() {
  const { langue } = useContext(AppContext);
  const projects = [
    {
      id: 1,
      title: "Écolio",
      description: "👩‍🏫 Marketplace for Teachers",
      videoSrc: "/assets/videos/ecolio-trailer.mp4",
      link: "https://ecolio.ca",
    },
    {
      id: 2,
      title: "Sketch",
      description: "🎨 Canva clone for Teachers",
      videoSrc: "/assets/videos/sketch-trailer.mp4",
      link: "https://github.com/samuel-duhaime/sketch",
    },
    {
      id: 3,
      title: "SportsSavvy",
      description: "🏀 E-commerce for Sports Technologies",
      videoSrc: "/assets/videos/sportsSavvy-trailer.mp4",
      link: "https://github.com/samuel-duhaime/sportssavvy",
    },
    {
      id: 4,
      title: "Critter",
      description: "🐦 Twitter Clone",
      videoSrc: "/assets/videos/critter-trailer.mp4",
      link: "https://github.com/samuel-duhaime/critter",
    },
    {
      id: 5,
      title: "Alien Shooter",
      description: "🎮 Video Game with JavaScript",
      videoSrc: "/assets/videos/alien-shooter-trailer.mp4",
      link: "https://github.com/samuel-duhaime/alien-shooter",
    },
  ];

  return (
    <div className={Styles.projets}>
      <Heading
        Tag="h2"
        text={langue === "en" ? "Projects" : "Projets"}
        textAlign="center"
      />
      <div className={Styles.projetsContainer}>
        {projects.map((project: { id: number; title: string; description: string; videoSrc: string; link: string }) => (
          <a
            key={project.id}
            className={Styles.projet}
            href={project.link}
            target="_blank"
          >
            <video
              src={project.videoSrc}
              title={project.title}
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className={Styles.projectInfo}>
              <h3>{project.title}</h3>
              <div>{project.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
