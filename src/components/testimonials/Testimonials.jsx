import Styles from "./testimonials.module.scss";

export default function Testimonials() {
   const data = [
      {
         id: 1,
         name: "Tom Durden",
         title: "Senior Developer",
         img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      },
      {
         id: 2,
         name: "Alex Kalinski",
         title: "Co-Founder of DELKA",
         img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
         featured: true,
      },
      {
         id: 3,
         name: "Martin Harold",
         title: "CEO of ALBI",
         img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      },
   ];
   return (
      <div
         className={Styles.testimonials}
         id="testimonials"
      >
         <h1>Testimonials</h1>
         <div className={Styles.container}>
            {data.map((data) => (
               <div className={Styles.card + (data.featured ? " " + Styles.featured : "")}>
                  <div className={Styles.top}>
                     <img
                        className={Styles.user}
                        src={data.img}
                        alt=""
                     />
                  </div>
                  <div className={Styles.center}>{data.desc}.</div>
                  <div className={Styles.bottom}>
                     <h3>{data.name}</h3>
                     <h4>{data.title}</h4>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
