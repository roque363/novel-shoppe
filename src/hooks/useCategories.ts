import { useQuery } from '@tanstack/react-query';

import { QK } from '@root/constants/queryKeys';
import { fetchCategories } from '@root/services/categories';
import type { Category } from '@root/types/domain/category';

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: QK.categories(),
    queryFn: fetchCategories,
    staleTime: 5 * 60_000,
  });
}
