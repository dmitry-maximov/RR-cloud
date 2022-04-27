import Space from '../pages/SpacePage';
import HelpPage from '../pages/HelpPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import StartPage from '../pages/StartPage';
import AboutPage from '../pages/AboutPage';
import {
  HELP_PAGE,
  LOGIN_PAGE,
  NOT_FOUND_PAGE,
  START_PAGE,
  CLOUD_SPAСE_PAGE,
  REGISTRATION_PAGE,
  ABOUT_PAGE,
} from '../utils/const';

export const publicRoutes = [
  {
    path: START_PAGE,
    element: <StartPage />,
  },
  {
    path: HELP_PAGE,
    element: <HelpPage />,
  },
  {
    path: LOGIN_PAGE,
    element: <LoginPage />,
  },
  {
    path: REGISTRATION_PAGE,
    element: <LoginPage />,
  },
  {
    path: ABOUT_PAGE,
    element: <AboutPage />,
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
