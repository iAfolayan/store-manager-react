import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'products',
    component: Dashboard,
    exact: true,
    path: '/products'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
