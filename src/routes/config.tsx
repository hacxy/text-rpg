import Home from '../views/main/home';
import Login from '../views/login';
import { redirect, RouteObject } from 'react-router-dom';
import Stage from '@/views/main/stage';
import Main from '../views/main';

export type IRouteConfig = RouteObject & {
  name?: string;
  icon?: JSX.Element;
};

export const routeConfig: IRouteConfig[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    name: '首页',
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main',
        element: <Main />,
        loader: () => {
          return redirect('/main/home');
        }
      },
      {
        path: 'home',
        index: true,
        element: <Home />
      },
      {
        path: 'stage',
        element: <Stage />
      }
    ]
  },
  {
    path: '*',
    loader: () => {
      return redirect('/main');
    }
  }
];
