import Link from "next/link";
import styles from "@/app/_styles/Button.module.css";

interface ButtonProps {
  text: string;
  style: "underline" | "solid";
  href?: string;
  onClick?: (e: any) => void;
}

export default function Button({ text, style, href, onClick }: ButtonProps) {
  let buttonStyle = `${styles.button}`;

  switch (style) {
    case "underline":
      buttonStyle += ` ${styles.underline}`;
      break;
    case "solid":
      buttonStyle += ` ${styles.solid}`;
      break;
  }
  return (
    <>
      {href ? (
        <Link href={href} className={buttonStyle}>
          <span>{text}</span>
        </Link>
      ) : (
        <button onClick={onClick} className={buttonStyle}>
          <span>{text}</span>
        </button>
      )}
    </>
  );
}
