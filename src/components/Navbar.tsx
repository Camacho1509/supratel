import Link from "next/link";
import styles from "@/css/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>SUPRATEL</div>
        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/catalogo">Catalog</Link>
        </nav>
        <button className={styles.cta}>Contact us</button>
      </div>
    </header>
  );
}