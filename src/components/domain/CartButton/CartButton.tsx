import { ShoppingCart, TrashIcon } from 'lucide-react';
import { useMemo } from 'react';

import { Button } from '@root/components/ui/button';
import { Separator } from '@root/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@root/components/ui/sheet';
import { notify } from '@root/lib/notify';
import { useCart, useCartCount, useCartSubtotal } from '@root/stores/cart';
import type { Product } from '@root/types/domain/product';

export function CartButton() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const count = useCartCount();
  const subtotal = useCartSubtotal();

  const label = useMemo(() => (count > 99 ? '99+' : String(count)), [count]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Abrir carrito">
          <ShoppingCart />
          {count > 0 && (
            <span className="text-primary-foreground absolute -top-1 -right-1 min-w-5 rounded-full bg-red-500 px-1 text-center text-[10px] font-semibold">
              {label}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full max-w-sm flex-col gap-0 p-0">
        <SheetHeader>
          <SheetTitle className="mb-0 px-4 py-3">Carrito</SheetTitle>
          <Separator className="my-0" />
        </SheetHeader>
        <div className="flex h-full grow flex-col overflow-y-auto">
          {items.length === 0 ? (
            <div className="mb-0 flex h-full flex-col px-4 py-3">
              <p className="text-muted-foreground text-sm">Tu carrito está vacío.</p>
            </div>
          ) : (
            <div className="mb-0 flex h-full flex-col">
              <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
                {items.map((p) => (
                  <div
                    key={p.id}
                    className="border-border flex items-center gap-3 rounded-md border p-2"
                  >
                    <div className="border-border size-14 overflow-hidden rounded border">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{p.title}</div>
                      <div className="text-muted-foreground text-xs">{p.categoryName}</div>
                      <div className="text-sm font-semibold">
                        {new Intl.NumberFormat('es-PE', {
                          style: 'currency',
                          currency: 'PEN',
                        }).format(p.price)}
                      </div>
                    </div>
                    <Button
                      variant="link"
                      size="icon"
                      aria-label="Eliminar"
                      onClick={() => {
                        remove(p.id);
                        notify.removed(p as Product);
                      }}
                    >
                      <TrashIcon className="size-5 stroke-gray-500" />
                    </Button>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground text-sm">Subtotal</div>
                  <div className="text-base font-semibold">
                    {new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(
                      subtotal
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      clear();
                      notify.cleared();
                    }}
                  >
                    Vaciar
                  </Button>
                  <Button className="w-full" disabled>
                    Pagar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartButton;
