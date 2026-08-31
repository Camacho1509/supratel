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

const expertiseIcons = {
  cable: Cable,
  network: Network,
  radioTower: RadioTower,
  waypoints: Waypoints,
  boxes: Boxes,
  router: Router,
};

export default function Home() {
  return (
    <main className={styles.homePage}>
      {/* ==================================================
          LANDING SUPERIOR
          ================================================== */}
      <div className={styles.landingShell}>
        {/* HERO */}
        <section className={styles.landingHero}>
          <div className={styles.landingHeroInner}>
            <div className={styles.landingHeroCopy}>
              <span className={styles.landingEyebrow}>
                GLOBAL INFRASTRUCTURE
              </span>

              <h1>
                Global Leader in
                <span>Fiber Optics</span>
              </h1>

              <p>
                Designed in Belgium, SUPRATEL® delivers comprehensive fiber
                optic infrastructure solutions for network operators, ISPs,
                and enterprises worldwide.
              </p>

              <Link href="/Catalog" className={styles.landingCta}>
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.landingHeroMedia}>
              <Image
                src="/img/Catalogo/FibraO.webp"
                alt="Fiber optic infrastructure"
                width={1400}
                height={900}
                priority
                className={styles.landingHeroImage}
              />
              <div className={styles.landingHeroOverlay} />
            </div>
          </div>
        </section>

        {/* MÉTRICAS */}
        <section
          className={styles.landingMetrics}
          aria-label="SUPRATEL key figures"
        >
          <div className={styles.landingMetricsInner}>
            <div className={styles.landingMetric}>
              <strong>220+</strong>
              <span>PRODUCT REFERENCES</span>
            </div>

            <div className={styles.landingMetric}>
              <strong>End</strong>
              <span>END-TO-END COVERAGE</span>
            </div>

            <div className={styles.landingMetric}>
              <strong>BE</strong>
              <span>DESIGNED IN BELGIUM</span>
            </div>

            <div className={styles.landingMetric}>
              <strong>10+</strong>
              <span>STRATEGIC PARTNERS</span>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className={styles.landingWho}>
          <div className={styles.landingWhoInner}>
            <div className={styles.landingSectionTitle}>
              <h2>WHO WE ARE</h2>
              <span />
            </div>

            <div className={styles.landingWhoGrid}>
              <article className={styles.landingWhoCopy}>
                <span className={styles.landingCardEyebrow}>
                  THE BLUEPRINT
                </span>

                <h3>Designed in Belgium. Deployed Globally.</h3>

                <p>
                  SUPRATEL® is a global telecommunications leader specializing
                  in comprehensive fiber optic infrastructure solutions. We
                  combine rigorous international standards with local market
                  flexibility to serve network operators, ISPs, and
                  enterprises.
                </p>

                <Link href="/Overview" className={styles.landingOutlineCta}>
                  LEARN MORE
                </Link>
              </article>

              <div className={styles.landingWhoMedia}>
                <div className={styles.landingWhoImageCard}>
                  <Image
                    src="/img/Catalogo/Electricista.webp"
                    alt="Telecommunications infrastructure installation"
                    width={1200}
                    height={800}
                    className={styles.landingWhoImage}
                  />

                  <div className={styles.landingWhoImageShade} />
                  <span className={styles.landingMediaLabel}>
                    HIGH-PERFORMANCE
                  </span>
                </div>

                <div className={styles.landingCapacityCard}>
                  <div>
                    <span>NETWORK CAPACITY</span>
                    <strong>Unlimited</strong>
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

      {/* ==================================================
          OUR EXPERTISE — SE CONSERVA
          ================================================== */}
      <section className={styles.expertise}>
        <h2>OUR EXPERTISE</h2>

        <div className={styles.grid}>
          {expertise.map((item) => {
            const Icon =
              expertiseIcons[item.icon as keyof typeof expertiseIcons];

            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.expertiseIcon}>
                  <Icon aria-hidden="true" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          GLOBAL OPERATIONS — SE CONSERVA
          ================================================== */}
      <section className={styles.operations}>
        <div className={styles.operationsText}>
          <h2>Global Operations & Logistics Centers</h2>

          <p>
            Strategic hubs ensuring rapid deployment across 4 continents and
            12+ countries.
          </p>

          <ul>
            <li>Headquarters: Belgium</li>

            <li style={{ color: "#FFD600" }}>
              <span style={{ color: "var(--color-secondary)" }}>
                5 Regional Logistics Hubs
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.mapBox}>
          <Image
            src="/Map.webp"
            alt="Global Operations Map"
            width={1600}
            height={900}
            className={styles.mapImage}
          />
        </div>
      </section>
    </main>
  );
}
