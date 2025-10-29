import { toast } from 'sonner';

import type { Product } from '@root/types/domain/product';

export const notify = {
  added(p: Product) {
    toast.success('Agregado al carrito', {
      description: p.title,
      duration: 1700,
    });
  },
  removed(p: Product) {
    toast.warning('Producto eliminado', {
      description: p.title,
      duration: 1500,
    });
  },
  cleared() {
    toast.error('Carrito vaciado', { duration: 1500 });
  },
  error(msg = 'Ocurrió un error') {
    toast.error(msg);
  },
};
