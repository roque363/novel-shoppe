import { EyeIcon } from 'lucide-react';

import { Button } from '@root/components/ui/button';
import type { Product } from '@root/types/domain/product';

interface ProductCardType {
  product: Product;
  handleAddToBag?: () => void;
  handleQuickview?: () => void;
}

const ProductCard = (props: ProductCardType) => {
  const { product: p, handleAddToBag, handleQuickview } = props;

  return (
    <article
      key={p.id}
      className="border-border bg-card text-card-foreground flex flex-col justify-between rounded-lg border p-3 transition hover:shadow-sm"
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
        <h3 className="mt-2 line-clamp-2 text-sm font-medium">{p.title}</h3>
        <div className="text-muted-foreground mt-1 text-[13px]">{p.categoryName}</div>
        <div className="mt-1 font-semibold">
          {new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
          }).format(p.price)}
        </div>
      </button>
      <div className="mt-2 flex items-center gap-2">
        <Button className="flex-1" onClick={handleAddToBag}>
          Agregar
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-10 px-0"
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
