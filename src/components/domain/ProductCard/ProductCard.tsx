import { EyeIcon } from 'lucide-react';

import { Button } from '@root/components/ui/button';
import { notify } from '@root/lib/notify';
import { useCart, useInCart } from '@root/stores/cart';
import type { Product } from '@root/types/domain/product';

interface ProductCardType {
  product: Product;
  handleQuickview?: () => void;
}

const ProductCard = (props: ProductCardType) => {
  const { product: p, handleQuickview = () => null } = props;

  const inCart = useInCart(p.id);
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);

  return (
    <article
      key={p.id}
      className="border-border bg-card text-card-foreground flex flex-col justify-between rounded-lg border p-0 transition hover:shadow-sm md:p-3"
    >
      <button
        type="button"
        onClick={handleQuickview}
        className="group block w-full text-left "
        aria-label={`Ver detalle de ${p.title}`}
      >
        <div className="border-border aspect-square overflow-hidden rounded-md border">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full scale-100 object-cover transition group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-2 md:p-0">
          <h3 className="mt-0 line-clamp-2 text-sm font-medium md:mt-2">{p.title}</h3>
          <div className="text-muted-foreground mt-1 text-[13px]">{p.categoryName}</div>
          <div className="mt-1 font-semibold">
            {new Intl.NumberFormat('es-PE', {
              style: 'currency',
              currency: 'PEN',
            }).format(p.price)}
          </div>
        </div>
      </button>
      <div className="mt-2 flex items-center gap-2 p-2 md:p-0">
        {!inCart ? (
          <Button
            className="flex-1"
            onClick={() => {
              add(p);
              notify.added(p);
            }}
          >
            Agregar
          </Button>
        ) : (
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              remove(p.id);
              notify.removed(p);
            }}
          >
            Eliminar
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          className="hidden w-10 px-0 md:flex"
          aria-label="Ver"
          onClick={handleQuickview}
        >
          <EyeIcon />
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
