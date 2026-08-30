"use client";

import { useState } from "react";

import CatalogSidebar from "@/components/catalog/CatalogSidebar";
import ProductCard from "@/components/catalog/ProductCard";

import { catalogSections } from "@/data/catalogSections";
import { catalogProducts } from "@/data/catalogProducts";

import styles from "./catalogo.module.css";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSections =
    activeCategory === "all"
      ? catalogSections
      : catalogSections.filter(
          (section) => section.id === activeCategory
        );

  const activeSection = catalogSections.find(
    (section) => section.id === activeCategory
  );

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
  };

  return (
    <main className={styles.catalogPage}>
      <CatalogSidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className={styles.catalogContent}>
        {/* ==========================================
            ENCABEZADO DINÁMICO
        ========================================== */}
        <header
          key={`header-${activeCategory}`}
          className={`${styles.catalogHeader} ${styles.catalogHeaderAnimation}`}
        >
          {activeSection ? (
            <>
              <h1>{activeSection.name.toUpperCase()}</h1>

              <div className={styles.productOverview}>
                <h3>PRODUCT OVERVIEW</h3>

                <div className={styles.overviewLine} />

                <p>{activeSection.overview}</p>
              </div>
            </>
          ) : (
            <>
              <h1>GLOBAL CATALOG</h1>

              <p className={styles.globalDescription}>
                High-performance industrial networking components and
                infrastructure hardware. All items currently in stock unless
                otherwise noted.
              </p>
            </>
          )}
        </header>

        {/* ==========================================
            PRODUCTOS
        ========================================== */}
        <div
          key={activeCategory}
          className={styles.catalogView}
        >
          {visibleSections.map((section) => {
            const products = catalogProducts.filter(
              (product) => product.categoryId === section.id
            );

            return (
              <section
                key={section.id}
                id={section.id}
                className={styles.categorySection}
              >
                {/* Cuando estamos viendo ALL PRODUCTS
                    sí mostramos el título de cada sección */}
                {activeCategory === "all" && (
                  <div className={styles.categoryHeading}>
                    <div className={styles.categoryHeadingIcon}>
                      ▦
                    </div>

                    <div>
                      <h2>{section.name}</h2>
                      <span />
                    </div>
                  </div>
                )}

                {products.length > 0 ? (
                  <div className={styles.productsGrid}>
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyCategory}>
                    <p>
                      Products for this category will be added here.
                    </p>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}