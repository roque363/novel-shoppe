import type { Product } from '@root/types/domain/product';
import type { ProductDTO } from '@root/types/dto/product.dto';

const FALLBACK_IMG = 'https://placehold.co/600x600';

export function mapProductDTO(dto: ProductDTO): Product {
  const images = Array.isArray(dto.images) && dto.images.length > 0 ? dto.images : [FALLBACK_IMG];
  return {
    id: dto.id,
    title: dto.title,
    slug: dto.slug,
    price: Number(dto.price) || 0,
    description: dto.description ?? '',
    categoryId: dto.category?.id ?? 0,
    categoryName: dto.category?.name ?? 'Desconocido',
    categorySlug: dto.category?.slug ?? 'desconocido',
    image: images[0],
    images,
  };
}

export function mapProductListDTO(list: ProductDTO[]): Product[] {
  return list.map(mapProductDTO);
}
