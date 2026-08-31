"use client";

import Image from "next/image";
import Link from "next/link";
import { expertise } from "@/data/expertise";
import styles from "./page.module.css";

import {
  Cable,
  Network,
  RadioTower,
  Waypoints,
  Boxes,
  Router,
  ArrowRight,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageContext";
import {
  expertiseSpanish,
  translations,
} from "@/i18n/translations";

const expertiseIcons = {
  cable: Cable,
  network: Network,
  radioTower: RadioTower,
  waypoints: Waypoints,
  boxes: Boxes,
  router: Router,
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className={styles.homePage}>
      <div className={styles.landingShell}>
        <section className={styles.landingHero}>
          <div className={styles.landingHeroInner}>
            <div className={styles.landingHeroCopy}>
              <span className={styles.landingEyebrow}>
                {t.home.hero.eyebrow}
              </span>

              <h1>
                {t.home.hero.title}
                <span>{t.home.hero.accent}</span>
              </h1>

              <p>{t.home.hero.description}</p>

              <Link href="/Catalog" className={styles.landingCta}>
                <span>{t.home.hero.cta}</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.landingHeroMedia}>
              <Image
                src="/img/Catalogo/FibraO.webp"
                alt={t.home.hero.imageAlt}
                width={1400}
                height={900}
                priority
                className={styles.landingHeroImage}
              />
              <div className={styles.landingHeroOverlay} />
            </div>
          </div>
        </section>

        <section
          className={styles.landingMetrics}
          aria-label="SUPRATEL key figures"
        >
          <div className={styles.landingMetricsInner}>
            <div className={styles.landingMetric}>
              <strong>220+</strong>
              <span>{t.home.metrics.productReferences}</span>
            </div>

            <div className={styles.landingMetric}>
              <strong>End</strong>
              <span>{t.home.metrics.endToEnd}</span>
            </div>

            <div className={styles.landingMetric}>
              <strong>BE</strong>
              <span>{t.home.metrics.designedBelgium}</span>
            </div>

            <div className={styles.landingMetric}>
              <strong>10+</strong>
              <span>{t.home.metrics.strategicPartners}</span>
            </div>
          </div>
        </section>

        <section className={styles.landingWho}>
          <div className={styles.landingWhoInner}>
            <div className={styles.landingSectionTitle}>
              <h2>{t.home.who.title}</h2>
              <span />
            </div>

            <div className={styles.landingWhoGrid}>
              <article className={styles.landingWhoCopy}>
                <span className={styles.landingCardEyebrow}>
                  {t.home.who.eyebrow}
                </span>

                <h3>{t.home.who.heading}</h3>

                <p>{t.home.who.description}</p>

                <Link href="/Overview" className={styles.landingOutlineCta}>
                  {t.home.who.cta}
                </Link>
              </article>

              <div className={styles.landingWhoMedia}>
                <div className={styles.landingWhoImageCard}>
                  <Image
                    src="/img/Catalogo/Electricista.webp"
                    alt={t.home.who.imageAlt}
                    width={1200}
                    height={800}
                    className={styles.landingWhoImage}
                  />

                  <div className={styles.landingWhoImageShade} />
                  <span className={styles.landingMediaLabel}>
                    {t.home.who.mediaLabel}
                  </span>
                </div>

                <div className={styles.landingCapacityCard}>
                  <div>
                    <span>{t.home.who.capacityLabel}</span>
                    <strong>{t.home.who.capacityValue}</strong>
                  </div>

                  <div className={styles.landingCapacityIcon} aria-hidden="true">
                    <Network />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.expertise}>
        <h2>{t.home.expertiseTitle}</h2>

        <div className={styles.grid}>
          {expertise.map((item) => {
            const Icon =
              expertiseIcons[item.icon as keyof typeof expertiseIcons];

            const translated =
              language === "es"
                ? expertiseSpanish[item.icon]
                : undefined;

            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.expertiseIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>{translated?.title ?? item.title}</h3>
                <p>{translated?.desc ?? item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.operations}>
        <div className={styles.operationsText}>
          <h2>{t.home.operations.title}</h2>

          <p>{t.home.operations.description}</p>

          <ul>
            <li>{t.home.operations.headquarters}</li>

            <li style={{ color: "#FFD600" }}>
              <span style={{ color: "var(--color-secondary)" }}>
                {t.home.operations.hubs}
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.mapBox}>
          <Image
            src="/Map.webp"
            alt={t.home.operations.mapAlt}
            width={1600}
            height={900}
            className={styles.mapImage}
          />
        </div>
      </section>
    </main>
  );
}
