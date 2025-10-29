import { StoreIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import CartButton from '@root/components/domain/CartButton';
import ThemeToggle from '@root/components/domain/ThemeToggle';

const AppHeader = () => {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-3">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="bg-primary/10 text-primary inline-block rounded-md px-1.5 py-1.5">
            <StoreIcon />
          </span>
          <span>Novel Shoppe</span>
        </Link>
        <div className="ml-2 flex items-center gap-2">
          <ThemeToggle />
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
