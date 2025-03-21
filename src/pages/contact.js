import { FaDiscord, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from '../styles/Contact.module.css';

const contactInfo = [
    { icon: FaEnvelope, label: "Email", link: "/", text: "sorenbikouta11@gmail.com" },
    { icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/soren-bikouta-b1b840357/", text: "Soren Bikouta" },
    { icon: FaGithub, label: "GitHub", link: "https://github.com/Bikoum-95", text: "Bikoum-95" },
    { icon: FaDiscord, label: "Discord", link: "/", text: "bkm_0011" }
];

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>Me Contacter</h2>
            <p className={styles.contactText}>
            Vous pouvez me contacter sur mes différents réseaux sociaux. Je suis ouvert à toute opportunité de collaboration ou de discussion. N'hésitez pas!
            </p>

            <div className={styles.contactGrid}>
                {contactInfo.map(({ icon: Icon, label, link, text }, index) => (
                    <a key={index} href={link} className={styles.contactItem} target="_blank" rel="noopener noreferrer">
                        <Icon className={styles.icon} />
                        <div className={styles.contactDetails}>
                            <span>{label} :</span>
                            <span>{text}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
