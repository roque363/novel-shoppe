import { AlertCircleIcon } from 'lucide-react';
import { useState } from 'react';

import ProductCard from '@root/components/domain/ProductCard';
import ProductDialog from '@root/components/domain/ProductDialog';
import { Alert, AlertTitle } from '@root/components/ui/alert';
import { Button } from '@root/components/ui/button';
import { useProducts } from '@root/hooks/useProducts';
import type { Product } from '@root/types/domain/product';

const Home = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  const { data, isLoading, isError, error, refetch } = useProducts({ limit: 10, offset: 0 });

  if (isLoading) {
    return (
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-border rounded-lg border p-3">
              <div className="bg-muted/60 aspect-square rounded-md" />
              <div className="bg-muted/60 mt-3 h-4 w-3/4 rounded" />
              <div className="bg-muted/60 mt-2 h-4 w-1/3 rounded" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-start text-left">
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>
            {typeof error === 'string' ? error : 'No se pudieron cargar los productos.'}
          </AlertTitle>
        </Alert>
        <Button className="mt-3" onClick={() => refetch()}>
          Reintentar
        </Button>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="border-border text-muted-foreground rounded-lg border p-6 text-sm">
        No hay resultados
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} handleQuickview={() => setSelected(p)} />
        ))}
      </div>
      {selected ? (
        <ProductDialog
          productId={selected.id}
          open={!!selected}
          onOpenChange={(o) => !o && setSelected(null)}
          // onAddToCart={(p) => useCart.getState().add(p)}
        />
      ) : null}
    </section>
  );
};

export default Home;
