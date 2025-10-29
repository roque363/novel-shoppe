import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';

import { useCart } from '@root/stores/cart';
import type { Product } from '@root/types/domain/product';

import ProductCard from './ProductCard';

function resetCart() {
  useCart.setState({ items: [] });
}

const product: Product = {
  id: 266,
  title: 'Audífonos Inalámbricos Sony WH-1000XM5',
  slug: 'audifonos-inalambricos-sony-wh-1000xm5',
  price: 80,
  description:
    'Audífonos inalámbricos de alta gama Sony WH-1000XM5 con cancelación activa de ruido, sonido envolvente 360 Reality Audio, batería de hasta 30 horas, carga rápida y estuche compacto. Compatibles con múltiples dispositivos, conectividad Bluetooth 5.2, soporte para app Sony Headphones Connect y diseño ergonómico con materiales premium para mayor confort en largas sesiones de uso.',
  categoryId: 24,
  categoryName: 'Electronics',
  categorySlug: 'electronics',
  image:
    'https://images.unsplash.com/photo-1704440278730-b420f5892700?auto=format&fit=crop&w=600&q=80',
  images: [
    'https://images.unsplash.com/photo-1704440278730-b420f5892700?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?auto=format&fit=crop&w=600&q=80',
  ],
};

describe('<ProductCard />', () => {
  beforeEach(() => resetCart());

  it('render title and formatted price', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Audífonos Inalámbricos Sony WH-1000XM5')).toBeInTheDocument();
    expect(screen.getByText('S/ 80.00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Agregar' })).toBeInTheDocument();
  });

  it('allows adding and then deleting products (toggle with Zustand)', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={product} />);

    // Initial state: Add button
    const addButton = screen.getByRole('button', { name: 'Agregar' });
    expect(addButton).toBeInTheDocument();
    expect(useCart.getState().items).toHaveLength(0);

    // Add
    await user.click(addButton);
    expect(useCart.getState().items).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Eliminar' })).toBeInTheDocument();

    // Remove
    const removeButton = screen.getByRole('button', { name: 'Eliminar' });
    await user.click(removeButton);
    expect(useCart.getState().items).toHaveLength(0);
    expect(screen.getByRole('button', { name: 'Agregar' })).toBeInTheDocument();
  });
});
