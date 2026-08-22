import { expertise } from "@/data/expertise";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>WHO WE ARE</h1>

            <p>
              Designed in Belgium, SUPRATEL® is a global telecommunications
              leader specializing in comprehensive fiber optic infrastructure
              solutions. We combine rigorous international standards with local
              market flexibility to serve network operators, ISPs, and
              enterprises.
            </p>

            <div className={styles.stats}>
              <div>
                <span>PRODUCT REFERENCES</span>
                <strong>220+</strong>
              </div>

              <div>
                <span>COVERAGE</span>
                <strong>End-to-End</strong>
              </div>

              <div>
                <span>ORIGIN</span>
                <strong>Belgium</strong>
              </div>

              <div>
                <span>PARTNERS</span>
                <strong>10+</strong>
              </div>
            </div>

            <button className={styles.learnMore}>Learn More</button>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              SUPRATEL
            </div>
          </div>
        </div>
      </section>

      <section className={styles.expertise}>
        <h2>3. OUR EXPERTISE</h2>

        <div className={styles.grid}>
          {expertise.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.iconPlaceholder}>▣</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.operations}>
        <div className={styles.operationsText}>
          <h2>Global Operations & Logistics Centers</h2>
          <p>
            Strategic hubs ensuring rapid deployment across 4 continents and
            12+ countries.
          </p>

          <ul>
            <li>Headquarters: Belgium</li>
            <li>5 Regional Logistics Hubs</li>
          </ul>
        </div>

        <div className={styles.mapPlaceholder}>
          GLOBAL OPERATIONS MAP
        </div>
      </section>
    </main>
  );
}