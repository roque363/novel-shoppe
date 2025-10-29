import { lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import App from '@root/App';

const Home = lazy(() => import('@root/pages/Home'));
const NotFound = lazy(() => import('@root/pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
