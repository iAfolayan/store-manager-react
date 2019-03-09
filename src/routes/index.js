import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';
import Category from '../pages/Category';

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
    name: 'product',
    component: Product,
    exact: true,
    path: '/product'
  },
  {
    name: 'category',
    component: Category,
    exact: true,
    path: '/category'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
