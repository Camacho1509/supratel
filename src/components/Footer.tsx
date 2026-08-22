import styles from "@/css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <p className={styles.logo}>SUPRATEL</p>
          <p className={styles.copy}>© 2026 SUPRATEL Infrastructure Global Operations. All rights reserved.</p>
        </div>
        <div>
          <p className={styles.label}>LEGAL</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}