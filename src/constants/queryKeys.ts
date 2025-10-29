export const QK = {
  products: (p?: { limit?: number; offset?: number }) =>
    ['products', p?.limit ?? null, p?.offset ?? null] as const,
  product: (id: number | string) => ['product', id] as const,
  categories: () => ['categories'] as const,
} as const;
