import Styles from "./heading.module.scss";

type HeadingProps = {
   Tag: "h1" | "h2" | "h3";
   text: string;
   textAlign?: "left" | "center" | "right" | "justify";
};

export default function Heading({ Tag, text, textAlign = "left" }: HeadingProps) {
   return (
      <span className={Styles.heading}>
         <Tag style={{ textAlign: textAlign }}>{text}</Tag>
      </span>
   );
}
