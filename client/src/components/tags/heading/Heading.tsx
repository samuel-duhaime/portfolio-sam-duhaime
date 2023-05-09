import Styles from "./heading.module.scss";

// Heading
export default function Heading({
  Tag,
  text,
  textAlign = "left",
}: {
  Tag: "h1" | "h2" | "h3";
  text: string;
  textAlign?: "left" | "center" | "right" | "justify";
}) {
  return (
    <span
      className={Styles.heading}
      id={text}
    >
      <Tag style={{ textAlign: textAlign }}>{text}</Tag>
    </span>
  );
}
