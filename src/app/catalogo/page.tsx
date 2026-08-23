"use client";

import { useState } from "react";

import CatalogSidebar from "@/components/catalog/CatalogSidebar";
import ProductCard from "@/components/catalog/ProductCard";

import { catalogCategories } from "@/data/catalogCategories";
import { catalogProducts } from "@/data/catalogProducts";

import styles from "./catalogo.module.css";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? catalogCategories
      : catalogCategories.filter(
          (category) =>
            category.id === activeCategory
        );

  return (
    <main className={styles.catalogPage}>
      <CatalogSidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className={styles.catalogContent}>
        <header className={styles.catalogHeader}>
          <h1>GLOBAL CATALOG</h1>

          <p>
            High-performance industrial networking
            components and infrastructure hardware.
            All items currently in stock unless
            otherwise noted.
          </p>
        </header>

        {visibleCategories.map((category) => {
          const products = catalogProducts.filter(
            (product) =>
              product.categoryId === category.id
          );

          return (
            <section
              key={category.id}
              id={category.id}
              className={styles.categorySection}
            >
              <div className={styles.categoryHeading}>
                <div
                  className={
                    styles.categoryHeadingIcon
                  }
                >
                  ▦
                </div>

                <div>
                  <h2>{category.name}</h2>
                  <span />
                </div>
              </div>

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
                  <div
                    className={styles.categoryPreview}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                    />
                  </div>

                  <p>
                    Products for this category will
                    be added here.
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}