import Image from "next/image";
import type { CatalogProduct } from "@/data/catalogProducts";
import styles from "@/app/Catalog/catalogo.module.css";

import { useLanguage } from "@/i18n/LanguageContext";
import { getProductName } from "@/i18n/translations";

interface ProductCardProps {
  product: CatalogProduct;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { language } = useLanguage();
  const productName = getProductName(
    product.id,
    product.name,
    language,
  );

  return (
    <article className={styles.productCard}>
      <div className={styles.productImage}>
        {product.badge && (
          <span className={styles.productBadge}>
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 260px"
        />
      </div>

      <div className={styles.productInfo}>
        <h3>{productName}</h3>

        {product.sku && (
          <p className={styles.productSku}>
            SKU: {product.sku}
          </p>
        )}
      </div>
    </article>
  );
}