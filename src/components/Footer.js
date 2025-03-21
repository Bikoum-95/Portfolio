import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                © {new Date().getFullYear()} Bikoumou. Tous droits réservés.
            </p>
            <p className={styles.signature}>Développement & passion pour la tech.</p>
        </footer>
    );
}
