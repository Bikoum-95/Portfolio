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
            <h1 className={styles.title}>As for me...</h1>
            
            <p className={styles.story}>
            I’ve always been passionate about tech.
            At first, I was just curious to understand how things work — then I wanted to build, automate, and solve real problems.

            Over time, I’ve explored different areas like development, data, and infrastructure. Today, I’m shaping a well-rounded profile, somewhere between developer, DevOps, and IT support.

            I’m currently studying at ETNA and looking for an apprenticeship to grow through hands-on experience, learn from professionals, and contribute to meaningful projects.
            My long-term goal? To keep improving and eventually move into data science, a field that truly excites me for its impact and endless possibilities.
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
