"use client";

import { useState } from "react";

import { catalogSections } from "@/data/catalogSections";
import styles from "@/app/Catalog/catalogo.module.css";

import { useLanguage } from "@/i18n/LanguageContext";
import {
  getSectionName,
  translations,
} from "@/i18n/translations";

import {
  Box,
  Cable,
  Grid2X2,
  Menu,
  Network,
  Router,
  Server,
  Wrench,
  X,
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
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleSelect = (category: string) => {
    onCategoryChange(category);

    // En móvil cerramos el menú después de seleccionar.
    setIsOpen(false);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarHeaderText}>
          <span className={styles.sidebarAccent} />

          <h2>{t.catalog.sidebarTitle}</h2>
          <p>{t.catalog.sidebarSubtitle}</p>
        </div>

        <button
          type="button"
          className={styles.sidebarMenuButton}
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="catalog-filter-menu"
          aria-label={
            isOpen
              ? t.catalog.closeFilters
              : t.catalog.openFilters
          }
        >
          {isOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="catalog-filter-menu"
        className={`${styles.sidebarNav} ${
          isOpen ? styles.sidebarNavOpen : ""
        }`}
      >
        <button
          type="button"
          className={`${styles.sidebarItem} ${
            activeCategory === "all"
              ? styles.sidebarItemActive
              : ""
          }`}
          onClick={() => handleSelect("all")}
        >
          <span className={styles.sidebarIcon}>
            <Grid2X2 aria-hidden="true" />
          </span>

          <span>{t.catalog.allProducts}</span>
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
              onClick={() =>
                handleSelect(section.id)
              }
            >
              <span className={styles.sidebarIcon}>
                <Icon aria-hidden="true" />
              </span>

              <span>
                {getSectionName(
                  section.id,
                  section.name,
                  language,
                )}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}