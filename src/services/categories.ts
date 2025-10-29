import { mapCategoryListDTO } from '@root/mappers/category.mapper';
import axios from '@root/services/axiosInstance';
import type { Category } from '@root/types/domain/category';
import type { CategoryDTO } from '@root/types/dto/category.dto';

export async function fetchCategories(): Promise<Category[]> {
  const res = await axios.get<CategoryDTO[]>('/categories');
  return mapCategoryListDTO(res.data);
}
