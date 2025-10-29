import type { CategoryDTO } from './category.dto';

export type ProductDTO = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryDTO;
  images: string[];
};
