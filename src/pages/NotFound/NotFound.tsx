import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-xl font-semibold">404 — Página no encontrada</h1>
      <p className="text-muted-foreground mt-2 text-sm">La ruta que abriste no existe.</p>
      <Link to="/" className="mt-4 inline-block underline">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;
