import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routers';
import { useDispatch, useSelector } from 'react-redux';
import { NOT_FOUND_PAGE } from '../utils/const';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from './Layout';
import { auth } from '../actions/user';

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   dispatch(auth());
  // }, []);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={3000}>
        <Routes location={location}>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
          ))}
          {isAuth &&
            privateRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={<Layout />}>
                <Route key={path} path={path} element={element} />
              </Route>
            ))}
          <Route path="*" element={<Navigate to={NOT_FOUND_PAGE} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
