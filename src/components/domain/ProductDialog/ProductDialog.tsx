import { useEffect, useMemo, useState } from 'react';

import { Badge } from '@root/components/ui/badge';
import { Button } from '@root/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@root/components/ui/dialog';
import { Separator } from '@root/components/ui/separator';
import { useProduct } from '@root/hooks/useProduct';
import type { Product } from '@root/types/domain/product';

type ProductDialogProps = {
  productId: number | string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart?: (p: Product) => void;
};

const ProductDialog = (props: ProductDialogProps) => {
  const { productId, open, onOpenChange, onAddToCart } = props;
  const { data, isLoading, isError, error, refetch } = useProduct(productId);
  const images = useMemo(
    () => (data?.images?.length ? data.images : [data?.image].filter(Boolean)),
    [data]
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) setActive(0);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="line-clamp-2 text-2xl">{data?.title ?? 'Producto'}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            {data?.categoryName ? <Badge variant="secondary">{data.categoryName}</Badge> : null}
            {isLoading ? <span className="text-muted-foreground">Cargando…</span> : null}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="border-border bg-card aspect-square overflow-hidden rounded-md border">
              {isLoading ? (
                <div className="bg-muted/60 h-full w-full animate-pulse" />
              ) : images?.[active] ? (
                <img
                  src={images[active]}
                  alt={data?.title ?? 'Imagen de producto'}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-muted-foreground flex h-full w-full items-center justify-center text-sm">
                  Sin imagen
                </div>
              )}
            </div>
            {images && images.length > 1 ? (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Ver imagen ${idx + 1}`}
                    onClick={() => setActive(idx)}
                    className={`aspect-square overflow-hidden rounded-md border transition ${
                      active === idx ? 'border-primary' : 'border-border hover:border-foreground/30'
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Info */}
          <div>
            {isLoading ? (
              <div className="space-y-3">
                <div className="bg-muted/60 h-6 w-2/3 animate-pulse rounded" />
                <div className="bg-muted/60 h-4 w-1/2 animate-pulse rounded" />
                <Separator className="my-3" />
                <div className="bg-muted/60 h-24 animate-pulse rounded" />
              </div>
            ) : isError ? (
              <div className="space-y-3">
                <p className="text-destructive text-sm">
                  {typeof error === 'string' ? error : 'No se pudo cargar el producto.'}
                </p>
                <Button onClick={() => refetch()}>Reintentar</Button>
              </div>
            ) : data ? (
              <div className="space-y-4">
                <div className="text-2xl font-semibold">
                  {new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(
                    data.price
                  )}
                </div>
                <Separator />
                <div className="prose prose-sm text-foreground max-w-none">
                  <h4 className="mb-1 text-base font-semibold">Descripción</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {data.description || 'Sin descripción.'}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* FOOTER */}
        <DialogFooter className="mt-4">
          <div className="flex w-full items-center justify-end gap-2">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>
              Cerrar
            </Button>
            <Button
              disabled={!data}
              onClick={() => {
                if (!data) return;
                if (onAddToCart) onAddToCart(data);
                else {
                  // TODO: reemplazar por tu store real (Zustand)
                  console.log('[ADD_TO_CART]', data.id);
                }
                onOpenChange(false);
              }}
            >
              Agregar al carrito
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
