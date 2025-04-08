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
            Depuis toujours, j’ai été passionné par la tech. 
            Ce qui m’a d’abord attiré, c’est de comprendre comment les choses fonctionnent, puis j’ai eu envie de créer, d’automatiser, de résoudre des problèmes. 
            J’ai exploré plusieurs domaines, du développement à la data en passant par l’infra, et aujourd’hui, je me dirige vers un profil polyvalent : développeur, DevOps ou technicien support.

            Étudiant à l’ETNA, je cherche une alternance pour progresser sur le terrain, apprendre auprès de pros et contribuer à des projets concrets. 
            Ce que je vise ? Monter en compétences, découvrir les réalités du métier, et à terme, évoluer dans la data science, un domaine qui me passionne pour son impact et ses possibilités.
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
