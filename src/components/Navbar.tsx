"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "@/css/Navbar.module.css";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, type Language } from "@/i18n/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* =====================================
            MARCA
        ===================================== */}
        <Link href="/" className={styles.brand}>
          <Image
            src="/Logo.svg"
            alt="SUPRATEL logo"
            width={60}
            height={60}
            className={styles.logoIcon}
            priority
          />

          <Image
            src="/Logosinfondo.png"
            alt="SUPRATEL"
            width={220}
            height={50}
            className={styles.logoText}
            priority
          />
        </Link>

        {/* =====================================
            NAVEGACIÓN
        ===================================== */}
        <nav className={styles.links}>
          <Link
            href="/"
            className={pathname === "/" ? styles.activeLink : ""}
          >
            {t.nav.home}
          </Link>

          <Link
            href="/Overview"
            className={pathname === "/Overview" ? styles.activeLink : ""}
          >
            {t.nav.overview}
          </Link>

          <Link
            href="/Catalog"
            className={pathname === "/Catalog" ? styles.activeLink : ""}
          >
            {t.nav.catalog}
          </Link>
        </nav>

        {/* =====================================
            CONTACTO + IDIOMA
        ===================================== */}
        <div className={styles.rightArea}>
          <div className={styles.contactInfo}>
            {/* WHATSAPP */}
            <a
              href="https://wa.me/33781724805"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              aria-label={t.nav.whatsappAria}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.contactIcon}
              >
                <path
                  fill="currentColor"
                  d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2 22l5.6-1.5A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.3.9.9-3.2-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-1.4-.7-2.5-1.5-3.4-3-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1.2 1.7-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.1 2.2.9 3.1 1 4.2.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.6-.3Z"
                />
              </svg>

              <span>(33) 781 724 805</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:contacto@eepsa.com.mx"
              className={styles.contactLink}
              aria-label={t.nav.emailAria}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.contactIcon}
              >
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                />
              </svg>

              <span>contacto@eepsa.com.mx</span>
            </a>
          </div>

          {/* =====================================
              SELECTOR DE IDIOMA
          ===================================== */}
          <div className={styles.languageSelector} ref={languageMenuRef}>
            <button
              type="button"
              className={`${styles.language} ${
                isLanguageOpen ? styles.languageOpen : ""
              }`}
              onClick={() => setIsLanguageOpen((current) => !current)}
              aria-label={t.nav.switchLanguageAria}
              aria-haspopup="menu"
              aria-expanded={isLanguageOpen}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.globeIcon}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>

              <span>{language.toUpperCase()}</span>

              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className={styles.languageChevron}
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isLanguageOpen && (
              <div className={styles.languageDropdown} role="menu">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={language === "en"}
                  className={`${styles.languageOption} ${
                    language === "en" ? styles.languageOptionActive : ""
                  }`}
                  onClick={() => selectLanguage("en")}
                >
                  <span className={styles.languageCode}>EN</span>
                  <span>English</span>
                  {language === "en" && (
                    <span className={styles.languageCheck} aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={language === "es"}
                  className={`${styles.languageOption} ${
                    language === "es" ? styles.languageOptionActive : ""
                  }`}
                  onClick={() => selectLanguage("es")}
                >
                  <span className={styles.languageCode}>ES</span>
                  <span>Español</span>
                  {language === "es" && (
                    <span className={styles.languageCheck} aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
