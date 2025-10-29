import { useQuery } from '@tanstack/react-query';

import { QK } from '@root/constants/queryKeys';
import { fetchProducts, type ListParams } from '@root/services/products';
import type { Product } from '@root/types/domain/product';

export function useProducts(params?: ListParams) {
  return useQuery<Product[]>({
    queryKey: QK.products(params),
    queryFn: () => fetchProducts(params),
    staleTime: 60_000,
  });
}
