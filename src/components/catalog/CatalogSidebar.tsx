"use client";

import { catalogCategories } from "@/data/catalogCategories";
import styles from "@/app/catalogo/catalogo.module.css";

interface CatalogSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CatalogSidebar({
  activeCategory,
  onCategoryChange,
}: CatalogSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <span className={styles.sidebarAccent} />

        <h2>Product Catalog</h2>

        <p>Industrial Solutions</p>
      </div>

      <nav className={styles.sidebarNav}>
        <button
          type="button"
          className={`${styles.sidebarItem} ${
            activeCategory === "all"
              ? styles.sidebarItemActive
              : ""
          }`}
          onClick={() => onCategoryChange("all")}
        >
          <span className={styles.sidebarIcon}>▦</span>

          <span>ALL PRODUCTS</span>
        </button>

        {catalogCategories.map((category) => (
          <button
            type="button"
            key={category.id}
            className={`${styles.sidebarItem} ${
              activeCategory === category.id
                ? styles.sidebarItemActive
                : ""
            }`}
            onClick={() =>
              onCategoryChange(category.id)
            }
          >
            <span className={styles.sidebarDot} />

            <span>{category.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}