import Space from '../pages/SpacePage';
import HelpPage from '../pages/HelpPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import StartPage from '../pages/StartPage';
import {
  HELP_PAGE_ROUTE,
  LOGIN_PAGE,
  NOT_FOUND_PAGE,
  START_PAGE_ROUTE,
  CLOUD_SPAСE_PAGE,
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
    path: CLOUD_SPAСE_PAGE,
    element: <Space />,
  },
  {
    path: NOT_FOUND_PAGE,
    element: <NotFoundPage />,
  },
];

export const privateRoutes = [
  {
    path: CLOUD_SPAСE_PAGE,
    element: <Space />,
  },
];
