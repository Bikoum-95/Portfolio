import styles from "../styles/About.module.css";
import { FaJs, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiGo } from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Go", icon: <SiGo /> }
];

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>À propos de moi</h1>
            
            <p className={styles.story}>
                Depuis mon plus jeune âge, l'informatique et le développement ont toujours été une passion.  
                Curieux et motivé, j’ai exploré plusieurs domaines avant de me spécialiser dans le développement web et mobile.  
                Actuellement étudiant à l'ETNA, je suis en quête d’une alternance pour mettre en pratique mes compétences,  
                collaborer sur des projets concrets et monter en expertise.  
                Mon objectif ? Développer des solutions innovantes et performantes tout en continuant à apprendre chaque jour.
            </p>

            <h2 className={styles.subtitle}>Compétences informatiques</h2>
            <div className={styles.skillsContainer}>
                {skills.map(skill => (
                    <div key={skill.name} className={styles.skill}>
                        <span className={styles.icon}>{skill.icon}</span>
                        <span className={styles.skillName}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
