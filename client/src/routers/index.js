import HelpPage from '../pages/HelpPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import StartPage from '../pages/StartPage';
import {
  HELP_PAGE_ROUTE,
  LOGIN_PAGE,
  NOT_FOUND_PAGE,
  START_PAGE_ROUTE,
} from '../utils/const';

export const publicRoutes = [
  {
    path: START_PAGE_ROUTE,
    element: <StartPage />,
  },
  {
    path: HELP_PAGE_ROUTE,
    element: <HelpPage />,
  },
  {
    path: LOGIN_PAGE,
    element: <LoginPage />,
  },
  {
    path: NOT_FOUND_PAGE,
    element: <NotFoundPage />,
  },
];
