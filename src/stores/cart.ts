import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { Product } from '@root/types/domain/product';

export type CartItem = Pick<Product, 'id' | 'title' | 'price' | 'image' | 'categoryName'>;

type CartState = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (productId: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p) =>
        set((state) => {
          if (state.items.some((it) => it.id === p.id)) return state;
          const item: CartItem = {
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.image,
            categoryName: p.categoryName,
          };
          return { items: [item, ...state.items] };
        }),

      remove: (productId) =>
        set((state) => ({ items: state.items.filter((it) => it.id !== productId) })),

      clear: () => set({ items: [] }),
    }),
    {
      name: 'novelshoppe:cart',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

export const useCartCount = () => useCart((s) => s.items.length);

export const useCartSubtotal = () => useCart((s) => s.items.reduce((acc, it) => acc + it.price, 0));

export const useInCart = (productId: number) =>
  useCart((s) => s.items.some((it) => it.id === Number(productId)));
