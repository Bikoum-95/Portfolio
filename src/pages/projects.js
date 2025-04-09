import { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

const projects = [
    {
        title: "Arduino - ETNAThermos",
        description: "An intelligent temperature sensor that communicates with a mobile app via Bluetooth.",
        image: "/image.png",
        github: "https://github.com/Bikoum-95/ETNAThermos#",
    },
    {
        title: "BikoumFlix",
        description: "A video streaming platform developed with React and Node.js, providing a smooth and immersive user experience.",
        image: "/bikoumflix.mp4",
        github: "https://github.com/Bikoum-95/BikoumFlix",
    },
    {
        title: "GeneratorPrime",
        description: "An application in GoLang that allows easy generation and customization of PDF files.",
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
            <h1 className={styles.title}>Here are a few of my projects.</h1>

            <div className={styles.projectsWrapper}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {project.image ? (
                                project.image.endsWith(".mp4") ? (
                                    <video controls className={styles.video}>
                                        <source src={project.image} type="video/mp4" />
                                        Your browser does not support video playback.                                    </video>
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
                            View on GitHub
                        </a>

                        {project.pdf && (
                            <a 
                                href={project.pdf} 
                                className={styles.button} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View PDF
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
