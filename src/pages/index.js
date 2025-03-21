import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    return (
        <div className={`${styles.homeContainer} ${isVisible ? styles.fadeIn : ""}`}>
            <div className={styles.imageWrapper}>
                <Image 
                    src="/large_1.jpg"
                    alt="Photo de profil"
                    width={300}
                    height={300}
                    className={styles.profileImage} 
                />
            </div>
            <h1 className={styles.name}>Bikoumou Sven-Soren</h1>
            <p className={styles.slogan}>Étudiant en 1ère année passionné par la tech et l'optimisation</p>
        </div>
    );
}
