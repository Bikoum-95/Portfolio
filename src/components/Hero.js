import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            Enchanté, moi c’est <span className={styles.highlight}>Soren</span>
          </h1>
          <p className={styles.subtitle}>
            Jeune développeur ambitieux, curieux et prêt à relever chaque défi.  
            En quête d'une <strong>alternance</strong> et d'un <strong>job étudiant</strong> pour transformer chaque ligne de code en vraie expérience terrain.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/large_1.jpg"
            alt="Photo de profil"
            width={250}
            height={250}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
