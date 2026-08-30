import Image from "next/image";
import type { CatalogProduct } from "@/data/catalogProducts";
import styles from "@/app/Catalog/catalogo.module.css";

interface ProductCardProps {
  product: CatalogProduct;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
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
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 260px"
        />
      </div>

      <div className={styles.productInfo}>
        <h3>{product.name}</h3>

        {product.sku && (
          <p className={styles.productSku}>
            SKU: {product.sku}
          </p>
        )}
      </div>
    </article>
  );
}