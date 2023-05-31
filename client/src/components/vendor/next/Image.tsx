import ImageNext from "next/image";

export default function Image({
  src,
  alt = "",
  width,
  height,
  sizes,
  placeholder = "empty",
  priority = false,
  onClick,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  placeholder?: "empty" | "blur";
  priority?: boolean;
  onClick?: () => void;
}) {
  return (
    <ImageNext
      src={src}
      blurDataURL={placeholder === "blur" ? `/_next/image?url=${src}&w=16&q=1` : ""} // Lien pour le blur image
      alt={alt}
      width={width}
      height={height}
      placeholder={placeholder} // "blur" || "empty"
      priority={priority} // true | False
      onClick={onClick}
      sizes={sizes} //  sizes="(min-width: 1000px) 600px, 300px"
      //loader={loader}
    />
  );
}
