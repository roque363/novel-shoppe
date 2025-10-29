import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from '@root/components/common/AppHeader';

function App() {
  return (
    <div className="layout">
      <AppHeader />
      <main className="layout__main">
        <Suspense fallback={<div className="text-muted-foreground p-4 text-sm">Cargando…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="layout__footer">
        <p>© {new Date().getFullYear()} NovelShoppe</p>
      </footer>
    </div>
  );
}

export default App;
