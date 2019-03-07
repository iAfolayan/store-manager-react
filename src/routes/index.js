import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
