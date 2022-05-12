import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes, authRoutes } from '../routers';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { checkAuth } from '../actions/user';
import PrivateLayout from './layout/PrivateLayout/PrivateLayout';
import { CLOUD_SPAСE_PAGE } from '../utils/const';
import NotFoundPage from '../pages/NotFoundPage';

const AuthRoute = ({ auth, children }) => {
  const location = useLocation();

  if (auth)
    return (
      <Navigate to={CLOUD_SPAСE_PAGE} replace state={{ from: location }} />
    );
  return children;
};

const PrivateRoute = ({ auth, children }) => {
  const location = useLocation();
  if (!auth) return <Navigate to="/" replace state={{ from: location }} />;
  return children;
};

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes location={location}>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
          ))}

          {privateRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoute auth={isAuth}>
                  <PrivateLayout> {element}</PrivateLayout>
                </PrivateRoute>
              }
            />
          ))}
          {authRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<AuthRoute auth={isAuth}>{element}</AuthRoute>}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
