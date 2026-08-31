"use client";

import Image from "next/image";
import styles from "@/css/Footer.module.css";

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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

        <p className={styles.copy}>
          {t.footer.line1}
          <br />
          {t.footer.line2}
        </p>
      </div>
    </footer>
  );
}
