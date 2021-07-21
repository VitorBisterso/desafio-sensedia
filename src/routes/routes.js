import Home from '../components/Home';
import User from '../components/User';
import NoRouteFound from '../components/NoRouteFound';

const routeNames = {
  HOME: 'home',
  USER: 'user',
  NO_ROUTE_FOUND: 'noRouteFound',
};

const allRoutes = [
  {
    name: routeNames.HOME,
    Component: Home,
    path: '/',
    isExact: true,
  },
  {
    name: routeNames.USER,
    Component: User,
    path: '/user',
  },
  {
    name: routeNames.NO_ROUTE_FOUND,
    Component: NoRouteFound,
    path: '*',
  },
];

const getPathToRoute = routeName =>
  allRoutes.find(route => route.name === routeName).path;

export { allRoutes, getPathToRoute, routeNames };
