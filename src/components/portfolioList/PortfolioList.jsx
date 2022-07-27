import Styles from "./portfolioList.module.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
       <li
          className={Styles.portfolioList + (active ? " " + Styles.active : "")}
          onClick={() => setSelected(id)}
       >
          {title}
       </li>
    );
}
