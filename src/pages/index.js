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
                <p className={styles.slogan}>Welcome!
                I’m a student at ETNA with a passion for tech, currently training in technico-functional roles, including development, support, and infrastructure.
                This portfolio showcases my projects, my journey, and what drives me.
                Feel free to explore through the navigation bar to learn more! 👨‍💻
                </p>
        </div>
    );
}
