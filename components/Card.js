import styles from "../styles/Card.module.css";
import { useState } from "react";

export default function Card({ title, image, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.buttons}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.menu}
            ></button>
            <a href={link} target="_blank" className={styles.link}></a>
          </div>
        </div>
      </div>
    </div>
  );
}
