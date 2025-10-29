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
import { ShoppingCart } from 'lucide-react';

// TODO: reemplaza por tu hook real (Zustand): const count = useCart((s) => s.totalItems);
function useCartCountMock() {
  return 0;
}

export function CartButton() {
  const count = useCartCountMock();
  const label = useMemo(() => (count > 99 ? '99+' : String(count)), [count]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Abrir carrito">
          {/* Icono carrito */}
          <ShoppingCart />
          <span className="text-primary-foreground absolute -top-1 -right-1 min-w-5 rounded-full bg-red-500 px-1 text-center text-[10px] font-semibold">
            {label}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle>Carrito</SheetTitle>
        </SheetHeader>
        <Separator className="my-3" />
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm">Tu carrito está vacío.</p>
          {/* TODO: Renderiza aquí la lista de items y el subtotal/total */}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartButton;
