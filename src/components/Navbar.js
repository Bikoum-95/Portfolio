import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const router = useRouter();

    useEffect(() => {
        setActiveSection(router.pathname);
    }, [router.pathname]);

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li className={activeSection === "/" ? styles.active : ""}>
                    <Link href="/">Accueil</Link>
                </li>
                <li className={activeSection === "/propos" ? styles.active : ""}>
                    <Link href="/about">À propos</Link>
                </li>
                <li className={activeSection === "/projects" ? styles.active : ""}>
                    <Link href="/projects">Projets</Link>
                </li>
                <li className={activeSection === "/contact" ? styles.active : ""}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
