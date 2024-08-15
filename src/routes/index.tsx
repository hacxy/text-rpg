import App from '../App.tsx';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { routeConfig } from './config.tsx';
import type { Router } from '@remix-run/router';

export const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        loader: () => redirect('/home')
      },
      ...routeConfig
    ]
  }
]);
