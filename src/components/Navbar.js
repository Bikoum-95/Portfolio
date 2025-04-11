// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActiveSection(router.pathname);
    setMenuOpen(false); // Fermer le menu au changement de route
  }, [router.pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>BKMFOLIO</div>

        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li className={activeSection === "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={activeSection === "/about" ? styles.active : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={activeSection === "/projects" ? styles.active : ""}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={activeSection === "/contact" ? styles.active : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
