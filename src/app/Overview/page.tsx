import type { Metadata } from "next";
import Image from "next/image";
import { catalogCategories as products } from "@/data/catalogCategories";
import styles from "./pagina.module.css";

export const metadata: Metadata = {
  title: "Catalog",
  description: "SUPRATEL product catalog",
};

export default function CatalogoPage() {
  return (
    <main className={styles.catalogPage}>
      <div className={styles.pageFrame}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>SUPRATEL® | PRODUCT OVERVIEW</h1>
            <div className={styles.yellowLine} />
          </header>

          <section className={styles.categorySection}>
            <div className={styles.categoryImage}>
              <Image
                src="/img/Catalogo/Electricista 2.webp"
                alt="Outside plant telecommunications installation"
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                className={styles.categoryPhoto}
              />
            </div>

            <div className={styles.categoryContent}>
              <h2>OUTSIDE PLANT (OSP)</h2>
              <p>
                Solutions for outdoor network infrastructure, including fiber
                optic cables, ducts and microducts, splice closures, terminal
                boxes, connectors, tools, clamps, and fastening systems.
                Designed to deliver maximum strength, durability, and reliable
                performance in the most demanding environments.
              </p>
            </div>
          </section>

          <section className={`${styles.categorySection} ${styles.reverse}`}>
            <div className={styles.categoryContent}>
              <h2>INSIDE PLANT (ISP)</h2>
              <p>
                Equipment and solutions for indoor network installations,
                including fiber optic cables, ODFs, racks, patch panels,
                connectors, pigtails, patch cords, and fiber management systems.
                SUPRATEL ensures organized, efficient, and highly reliable
                infrastructure for mission-critical networks.
              </p>
            </div>

            <div className={styles.categoryImage}>
              <Image
                src="/img/Catalogo/Fibra O 2.webp"
                alt="Inside plant fiber optic equipment"
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                className={styles.categoryPhoto}
              />
            </div>
          </section>

          <section className={styles.productsSection}>
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <article className={styles.productCard} key={product.name}>
                  <div className={styles.productImage}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>

                  <h2>{product.name}</h2>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}