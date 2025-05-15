import { FaDiscord, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; 
import styles from "../styles/Contact.module.css";

const contactInfo = [
    { icon: FaEnvelope, label: "Email", text: "sorenbikoumou11@gmail.com" },
    { icon: FaLinkedin, label: "LinkedIn", text: "Sven Soren Bikoumou" },
    { icon: FaGithub, label: "GitHub", link: "https://github.com/Bikoum-95", text: "Bikoum-95" },
    { icon: FaDiscord, label: "Discord", text: "bkm_0011" }
];

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>Contact Me</h2>
            <p className={styles.contactText}>
                Feel free to reach out to me through my social media channels.
                I’m always open to new opportunities, collaborations, or just a good conversation. Don’t hesitate to get in touch!
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

            {/* Bouton Télécharger CV */}
            <a href="/CVResume2.pdf" download className={styles.cvButton}>
                Download CV
            </a>
        </div>
    );
}
