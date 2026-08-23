export interface CatalogProduct {
  id: string;
  name: string;
  sku?: string;
  image: string;
  categoryId: string;
  badge?: string;
  description?: string;
}

export const catalogProducts: CatalogProduct[] = [];