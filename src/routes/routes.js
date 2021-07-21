import Home from '../components/Home';
import User from '../components/User';
import NoRouteFound from '../components/NoRouteFound';

const routes = [
  {
    name: 'home',
    Component: Home,
    path: '/',
    isExact: true,
  },
  {
    name: 'user',
    Component: User,
    path: '/user',
  },
  {
    name: 'noRouteFound',
    Component: NoRouteFound,
    path: '*',
  },
];

export default routes;
