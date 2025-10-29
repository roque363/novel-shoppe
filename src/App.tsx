import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div></div>
      <Suspense fallback={<div className="text-muted-foreground p-4 text-sm">Cargando…</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
