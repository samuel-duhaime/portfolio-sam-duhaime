import { useContext } from "react";
import { AppContext } from "src/components/conteneurs/context/AppContext";
import Heading from "../../tags/heading/Heading";
import Liste from "../../conteneurs/liste/Liste";
// import CodeConteneur from "../../conteneurs/codeConteneur/CodeConteneur";
import ImageSelectionnee from "../../conteneurs/imageSelectionnee/ImageSelectionnee";
import Styles from "./cv.module.scss";

export default function CV() {
  const { langue } = useContext(AppContext);
  return (
    <div className={Styles.cv}>
      <Heading
        Tag="h2"
        text="CV"
        textAlign="center"
      />
      <div className={Styles.sections}>
        <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Work experience"
            />
          </div>
          <div className={Styles.right}>
            <div className={Styles.descriptions}>
              {/* Écolio */}
              <div className={Styles.description}>
                <div className={Styles.descriptionTitre}>
                  <div>
                    <strong>Founder & Full Stack Web Developer | Écolio </strong>
                  </div>
                  <div>Fall 2020 - present</div>
                </div>
                <div>
                  <Liste
                    Tag="ul"
                    checkListe={true}
                    liArray={[
                      {
                        text: "Developed a marketplace, registering and onboarding 200+ users, 30+ shops, and 50+ products since launch.",
                        id: 1,
                      },
                      {
                        text: "Planned project milestones and priorities, conducted user interviews for prototype development, and wrote concise, structured, secure, and scalable code.",
                        id: 2,
                      },
                      {
                        text: "Secured $25,000 funding from École des entrepreneurs du Québec.",
                        id: 3,
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Teacher */}
              <div className={Styles.description}>
                <div className={Styles.descriptionTitre}>
                  <div>
                    <strong>Teacher | Peter Hall School & CSSDM</strong>
                  </div>
                  <div>2017 to 2019, 2021</div>
                </div>
                <div>
                  <Liste
                    Tag="ul"
                    checkListe={true}
                    liArray={[
                      {
                        text: "Collaborated with school team professionals and parents.",
                        id: 1,
                      },
                      {
                        text: "Planned objectives and intervention plans for students with disabilities.",
                        id: 2,
                      },
                      {
                        text: "Managed crises and unforeseen events.",
                        id: 3,
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Quebec without Borders */}
              <div className={Styles.description}>
                <div className={Styles.descriptionTitre}>
                  <div>
                    <strong>Project Manager & Team Leader | Quebec without Borders </strong>
                  </div>
                  <div>2019 - 2020</div>
                </div>
                <div>
                  <Liste
                    Tag="ul"
                    checkListe={true}
                    liArray={[
                      {
                        text: "Led and trained a team of seven interns for three months in Bolivia, and managed a $15,000 internship budget.",
                        id: 1,
                      },
                      {
                        text: "Wrote a grant application of $50,000 to the Ministry of International Relations for an international solidarity project in Bolivia.",
                        id: 2,
                      },
                      {
                        text: "Developed project's logical framework and timeline in collaboration with Bolivian and Canadian partners.",
                        id: 3,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Education"
            />
          </div>

          <div className={Styles.right}>
            <div className={Styles.descriptions}>
              {/* Concordia University */}
              <div className={Styles.description}>
                <div className={Styles.descriptionTitre}>
                  <div>
                    <strong>Concordia University | Diploma in Full-Stack Web Development</strong>
                  </div>
                  <div>2023</div>
                </div>
                <div>
                  <Liste
                    Tag="ul"
                    checkListe={true}
                    liArray={[
                      {
                        text: "Completed an intensive Full Stack Development Bootcamp that focused on modern Web Development technologies including JavaScript, React, Node.js, HTML, and CSS.",
                        id: 1,
                      },
                      {
                        text: " Led a team project to develop an e-commerce website using collaborative tools such as Figma, GitHub, and Trello, showcasing effective project management and teamwork skills.",
                        id: 2,
                      },
                      {
                        text: "Developed solo projects within tight deadlines, including a Canva clone, Twitter clone, flight ticket application, and a JavaScript game.",
                        id: 3,
                      },
                    ]}
                  />
                </div>
              </div>

              {/* HEC */}
              <div className={Styles.description}>
                <div className={Styles.descriptionTitre}>
                  <div>
                    <strong>HEC Montreal | Certificate of Studies in Entrepreneurial Project Design</strong>
                  </div>
                  <div>2020</div>
                </div>
                <div>
                  <Liste
                    Tag="ul"
                    checkListe={true}
                    liArray={[
                      {
                        text: "Developed and delivered a pitch showcasing effective communication skills in presenting the project to stakeholders.",
                        id: 1,
                      },
                      {
                        text: "Planned and executed an entrepreneurial project, demonstrating skills in project planning, coordination, and communication.",
                        id: 2,
                      },
                      {
                        text: "Designed a comprehensive business strategy for a marketplace project, incorporating market research, competitive analysis, and financial planning.",
                        id: 3,
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Laval University */}
              <div className={Styles.description}>
                <div className={Styles.descriptionTitre}>
                  <div>
                    <strong>Laval University | Bachelor's degree in Health and Physical Education</strong>
                  </div>
                  <div>2020</div>
                </div>
                <div>
                  <Liste
                    Tag="ul"
                    checkListe={true}
                    liArray={[
                      {
                        text: "Developed and implemented instructional materials and strategies for teaching physical education, health, and fitness concepts, showcasing effective communication skills.",
                        id: 1,
                      },
                      {
                        text: "Managed classroom environments and maintained discipline, creating a positive and inclusive learning environment conducive to student success.",
                        id: 2,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hard skills */}
        {/* <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Codage"
            />
          </div>
          <div className={Styles.right}>
            <CodeConteneur />
          </div>
        </div> */}

        {/* Hard skills */}
        <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Hard skills"
            />
          </div>
          <div className={Styles.right}>
            <div className={Styles.description}>
              <Liste
                Tag="ul"
                checkListe={true}
                liArray={[
                  {
                    text: "JavaScript, TypeScript",
                    id: 1,
                  },
                  {
                    text: "React, Next.js, HTML",
                    id: 2,
                  },
                  {
                    text: "CSS, SASS, Styled Components",
                    id: 3,
                  },
                  {
                    text: "Node.js, Express, MongoDB, AWS, Docker",
                    id: 4,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Tools"
            />
          </div>
          <div className={Styles.right}>
            <ImageSelectionnee />
          </div>
        </div>

        {/* Soft skills */}
        <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Soft skills"
            />
          </div>
          <div className={Styles.right}>
            <div className={Styles.description}>
              <Liste
                Tag="ul"
                checkListe={true}
                liArray={[
                  {
                    text: "Bilingual (French and English)",
                    id: 1,
                  },
                  {
                    text: "Autonomous and organized",
                    id: 2,
                  },
                  {
                    text: "Great adaptability",
                    id: 3,
                  },
                  {
                    text: "Curious",
                    id: 4,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Volunteering */}
        <div className={Styles.section}>
          <div className={Styles.left}>
            <Heading
              Tag="h3"
              text="Volunteering"
            />
          </div>
          <div className={Styles.right}>
            <div className={Styles.description}>
              <Liste
                Tag="ul"
                checkListe={true}
                liArray={[
                  {
                    text: "Speaker on entrepreneurship at the Carrefour jeunesse-emploi Ahuntsic (2022).",
                    id: 1,
                  },
                  {
                    text: "Organizer and facilitator of workshops in Bolivia with Quebec without Borders (2017).",
                    id: 2,
                  },
                  {
                    text: "Organizer for the Grand Défi Pierre Lavoie with Laval University (2016-2017).",
                    id: 3,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
