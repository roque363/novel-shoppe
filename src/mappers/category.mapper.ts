import type { Category } from '@root/types/domain/category';
import type { CategoryDTO } from '@root/types/dto/category.dto';

export function mapCategoryDTO(dto: CategoryDTO): Category {
  return {
    id: dto.id,
    name: dto.name,
    slug: dto.slug,
    image: dto.image,
  };
}

export function mapCategoryListDTO(list: CategoryDTO[]): Category[] {
  return list.map(mapCategoryDTO);
}
