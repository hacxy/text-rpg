import { getPlayerToken } from '../utils';
import Home from '../views/home';
import Login from '../views/login';
import Profile from '../views/profile';
import { redirect, RouteObject } from 'react-router-dom';
import Stage from '../views/stage';

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
    path: '/home',
    index: true,
    element: <Home />,
    // icon: <HomeO />,
    loader: () => {
      const code = getPlayerToken();
      if (!code) {
        return redirect('/login');
      }
      return null;
    }
  },
  {
    name: '场景',
    path: '/stage',
    element: <Stage />
    // icon: <HomeO />
  },
  {
    name: '我的',
    path: '/profile',
    element: <Profile />
    // icon: <FriendsO />
  }
];
