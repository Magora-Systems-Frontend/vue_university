import { ROUTES } from '../config/constants';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import TestPage from '../pages/TestPage/TestPage';

export const routes = [
  { path: ROUTES.HOME_PAGE, component: Home },
  { path: ROUTES.TEST_PAGE, component: TestPage },
  { path: '*', component: NotFound },
];
