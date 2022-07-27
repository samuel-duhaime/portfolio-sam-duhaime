import { useState } from "react";
import Styles from "./works.module.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, inventore delectus.",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, inventore delectus.",
            img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, inventore delectus.",
            img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(
                  currentSlide < data.length - 1 ? currentSlide + 1 : 0
              );
    };
    return (
        <div className={Styles.works} id="works">
            <h1>Works</h1>
            <div
                className={Styles.slider}
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((data) => (
                    <div className={Styles.container}>
                        <div className={Styles.item}>
                            <div className={Styles.left}>
                                <div className={Styles.leftContainer}>
                                    <div className={Styles.imgContainer}>
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>{data.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className={Styles.right}>
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className={Styles.arrow + " " + Styles.left}
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className={Styles.arrow + " " + Styles.right} 
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}
