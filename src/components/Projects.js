import { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

const iconMap = {
  postgresql: "postgresql",
  react: "react",
  nodejs: "nodedotjs",
  prisma: "prisma",
  nextdotjs: "nextdotjs",
  typescript: "typescript",
  arduino: "arduino",
  bluetooth: "bluetooth",
  iot: "iot",
  golang: "go"
};

const projects = [
  {
    title: "Verdana",
    description: "Back-end et front-end d'un système de capteurs pour plantes.",
    image: "/verdana.png",
    github: "",
    techs: ["postgresql", "react", "nodejs"]
  },
  {
    title: "CRM Fullstack",
    description: "Mini CRM avec Next.js, Prisma et PostgreSQL — Authentification, gestion client, dashboard.",
    image: "/crm.png",
    github: "",
    techs: ["nextdotjs", "prisma", "postgresql", "typescript"]
  },
  {
    title: "Arduino - ETNAThermos",
    description: "Capteur de température intelligent communiquant via Bluetooth.",
    image: "/image.png",
    github: "https://github.com/Bikoum-95/ETNAThermos",
    techs: ["arduino", "bluetooth", "iot"]
  },
  {
    title: "BikoumFlix",
    description: "Plateforme de streaming vidéo avec React et Node.js.",
    image: "/bikoumflix.mp4",
    github: "https://github.com/Bikoum-95/BikoumFlix",
    techs: ["react", "nodejs", "video"]
  },
  {
    title: "GeneratorPrime",
    description: "Application GoLang pour la génération de PDF personnalisés.",
    pdf: "/Piratetetr.pdf",
    github: "https://github.com/Bikoum-95/GeneratorPrime",
    techs: ["golang", "adobeacrobatreader"]
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className={`${styles.projectsContainer} ${isVisible ? styles.fadeIn : ""}`}
    >
      <h2 className={styles.title}>Mes Projets</h2>

      <div className={styles.projectsWrapper}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              {project.image && project.image.endsWith(".mp4") ? (
                <video
                  controls
                  className={styles.video}
                  style={{ borderRadius: "12px", width: "100%", height: "250px", objectFit: "cover" }}
                >
                  <source src={project.image} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
              ) : project.pdf ? (
                <iframe
                  src={project.pdf}
                  width="100%"
                  height="250px"
                  style={{ border: "none", borderRadius: "12px" }}
                  title={project.title}
                ></iframe>
              ) : null}
            </div>

            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.techIcons}>
              {project.techs.map((tech, i) => {
                const icon = iconMap[tech];
                return icon ? (
                  <img
                    key={i}
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${icon}.svg`}
                    alt={tech}
                    width={30}
                    height={30}
                    title={tech.toUpperCase()}
                    style={{ filter: "invert(80%)", transition: "transform 0.3s" }}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : null;
              })}
            </div>

            {project.github && (
              <a
                href={project.github}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur GitHub
              </a>
            )}

            {project.pdf && (
              <a
                href={project.pdf}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
