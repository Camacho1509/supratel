"use client";

import Image from "next/image";
import { catalogCategories as products } from "@/data/catalogCategories";
import styles from "./pagina.module.css";

import { useLanguage } from "@/i18n/LanguageContext";
import {
  getCategoryName,
  translations,
} from "@/i18n/translations";

export default function OverviewContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className={styles.catalogPage}>
      <div className={styles.pageFrame}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1>{t.overview.title}</h1>
            <div className={styles.yellowLine} />
          </header>

          <section className={styles.categorySection}>
            <div className={styles.categoryImage}>
              <Image
                src="/img/Catalogo/Electricista 2.webp"
                alt={t.overview.ospImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                className={styles.categoryPhoto}
              />
            </div>

            <div className={styles.categoryContent}>
              <h2>{t.overview.ospTitle}</h2>
              <p>{t.overview.ospDescription}</p>
            </div>
          </section>

          <section className={`${styles.categorySection} ${styles.reverse}`}>
            <div className={styles.categoryContent}>
              <h2>{t.overview.ispTitle}</h2>
              <p>{t.overview.ispDescription}</p>
            </div>

            <div className={styles.categoryImage}>
              <Image
                src="/img/Catalogo/Fibra O 2.webp"
                alt={t.overview.ispImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                className={styles.categoryPhoto}
              />
            </div>
          </section>

          <section className={styles.productsSection}>
            <div className={styles.productsGrid}>
              {products.map((product) => {
                const productName = getCategoryName(
                  product.id,
                  product.name,
                  language,
                );

                return (
                  <article className={styles.productCard} key={product.id}>
                    <div className={styles.productImage}>
                      <Image
                        src={product.image}
                        alt={productName}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>

                    <h2>{productName}</h2>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
