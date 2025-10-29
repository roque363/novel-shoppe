import { useQuery } from '@tanstack/react-query';

import { QK } from '@root/constants/queryKeys';
import { fetchProductById } from '@root/services/products';
import type { Product } from '@root/types/domain/product';

export function useProduct(id?: number | string) {
  return useQuery<Product>({
    queryKey: id ? QK.product(id) : ['product', 'empty'],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
}
