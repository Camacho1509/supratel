"use client";

import { catalogSections } from "@/data/catalogSections";
import styles from "@/app/Catalog/catalogo.module.css";

import {
  Box,
  Cable,
  Grid2X2,
  Network,
  Router,
  Server,
  Wrench,
} from "lucide-react";

interface CatalogSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const sectionIcons = {
  "hardware-accessories": Wrench,
  connectivity: Network,
  cables: Cable,
  enclosures: Box,
  "ont-onu": Router,
  "odf-fiber-patch-panels": Server,
};

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
          <span className={styles.sidebarIcon}>
            <Grid2X2 aria-hidden="true" />
          </span>
          <span>ALL PRODUCTS</span>
        </button>

        {catalogSections.map((section) => {
          const Icon =
            sectionIcons[
              section.id as keyof typeof sectionIcons
            ];

          return (
            <button
              type="button"
              key={section.id}
              className={`${styles.sidebarItem} ${
                activeCategory === section.id
                  ? styles.sidebarItemActive
                  : ""
              }`}
              onClick={() => onCategoryChange(section.id)}
            >
              <span className={styles.sidebarIcon}>
                <Icon aria-hidden="true" />
              </span>
              <span>{section.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
