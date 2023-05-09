import { useContext } from "react";
import Typewriter from "typewriter-effect";
import { AppContext } from "src/components/conteneurs/context/AppContext";
import Image from "../../vendor/next/Image";
import Styles from "./intro.module.scss";

export default function Intro() {
  const { langue } = useContext(AppContext);

  return (
    <div className={Styles.intro}>
      <div className={Styles.left}>
        <div className={Styles.imgContainer}>
          <Image
            src="/assets/images/photos/sam-duhaime.png"
            alt="Samuel Duhaime-Morissette"
            height={600}
            width={600}
            priority={true}
          />
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.wrapper}>
          <div className={Styles.titre}>
            <h1>Samuel Duhaime</h1>
            {langue === "en" ? (
              <>
                <h2 className={Styles.red}>
                  <Typewriter
                    options={{
                      wrapperClassName: Styles.red,
                      cursorClassName: Styles.cursor,
                      strings: ["Full Stack", "Frontend", "Backend"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  Web developer
                </h2>

                <div className={Styles.small}>Montreal, Quebec</div>
              </>
            ) : (
              <>
                {" "}
                <h2 className={Styles.red}>
                  Développeur web
                  <Typewriter
                    options={{
                      wrapperClassName: Styles.red,
                      cursorClassName: Styles.cursor,
                      strings: ["Full-stack", "Frontend", "Backend"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <div className={Styles.small}>Montréal, Québec</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
