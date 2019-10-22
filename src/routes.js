import { ROUTES } from './config/constants';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

export const routes = [
  { path: ROUTES.HOME_PAGE, component: Home },
  { path: '*', component: NotFound },
];
