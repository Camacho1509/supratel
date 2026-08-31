import Image from "next/image";
import styles from "@/css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* MARCA */}
        <div className={styles.brand}>
          <Image
            src="/Logo.svg"
            alt="SUPRATEL logo"
            width={52}
            height={52}
            className={styles.logoIcon}
          />

          <Image
            src="/Logosinfondo.png"
            alt="SUPRATEL"
            width={230}
            height={45}
            className={styles.logoText}
          />
        </div>

        {/* COPYRIGHT */}
        <p className={styles.copy}>
          © 2026 SUPRATEL Infrastructure Global Operations.
          <br />
          All rights reserved.
        </p>

      </div>
    </footer>
  );
}