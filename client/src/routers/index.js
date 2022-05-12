import Space from '../pages/SpacePage';
import HelpPage from '../pages/HelpPage';
import AuthPage from '../pages/AuthPage';
import StartPage from '../pages/StartPage';
import AboutPage from '../pages/AboutPage';
import {
  HELP_PAGE,
  LOGIN_PAGE,
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
    path: ABOUT_PAGE,
    element: <AboutPage />,
  },
];

export const privateRoutes = [
  {
    path: CLOUD_SPAСE_PAGE,
    element: <Space />,
  },
];

export const authRoutes = [
  {
    path: LOGIN_PAGE,
    element: <AuthPage />,
  },
  {
    path: REGISTRATION_PAGE,
    element: <AuthPage />,
  },
];
