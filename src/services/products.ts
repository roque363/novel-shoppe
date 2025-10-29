import { mapProductDTO, mapProductListDTO } from '@root/mappers/product.mapper';
import axios from '@root/services/axiosInstance';
import type { Product } from '@root/types/domain/product';
import type { ProductDTO } from '@root/types/dto/product.dto';

export type ListParams = {
  limit?: number;
  offset?: number;
  price?: number;
  price_min?: number;
  price_max?: number;
};

export async function fetchProducts(params?: ListParams): Promise<Product[]> {
  const res = await axios.get<ProductDTO[]>('/v1/products', { params });
  return mapProductListDTO(res.data);
}

export async function fetchProductById(id: number | string): Promise<Product> {
  const res = await axios.get<ProductDTO>(`/v1/products/${id}`);
  return mapProductDTO(res.data);
}
