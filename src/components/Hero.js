import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            Salut, moi c’est <span className={styles.highlight}>[Ton Prénom]</span>
          </h1>
          <p className={styles.subtitle}>
            Développeur passionné – alternance & job étudiant
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/profil.jpg"
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
