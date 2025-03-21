import { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

const projects = [
    {
        title: "Arduino - ETNAThermos",
        description: "Un capteur de température intelligent qui communique avec une application mobile via Bluetooth.",
        image: "/image.png",
        github: "https://github.com/Bikoum-95/ETNAThermos#",
    },
    {
        title: "BikoumFlix",
        description: "Plateforme de streaming vidéo développée avec React et Node.js, pour une expérience utilisateur fluide et immersive.",
        image: "/bikoumflix.mp4",
        github: "https://github.com/Bikoum-95/BikoumFlix",
    },
    {
        title: "GeneratorPrime",
        description: "Application en GOlang permettant de générer et personnaliser des fichiers PDF facilement.",
        pdf: "/Piratetetr.pdf",
        github: "https://github.com/Bikoum-95/GeneratorPrime#",
    }
];

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    return (
        <div className={`${styles.projectsContainer} ${isVisible ? styles.fadeIn : ""}`}>
            <h1 className={styles.title}>Mes Projets</h1>

            <div className={styles.projectsWrapper}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {project.image ? (
                                project.image.endsWith(".mp4") ? (
                                    <video controls className={styles.video}>
                                        <source src={project.image} type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture des vidéos.
                                    </video>
                                ) : (
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        width={300} 
                                        height={200} 
                                        className={styles.image} 
                                    />
                                )
                            ) : project.pdf ? (
                                <iframe 
                                    src={project.pdf} 
                                    width="100%" 
                                    height="200px" 
                                    style={{ border: "none" }}
                                ></iframe>
                            ) : null}
                        </div>
                        <h2 className={styles.cardTitle}>{project.title}</h2>
                        <p className={styles.cardDescription}>{project.description}</p>

                        <a 
                            href={project.github} 
                            className={styles.button} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Voir le projet ${project.title} sur GitHub`}
                        >
                            Voir sur GitHub
                        </a>

                        {project.pdf && (
                            <a 
                                href={project.pdf} 
                                className={styles.button} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Voir le PDF
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
