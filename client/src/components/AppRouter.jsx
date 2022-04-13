import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { publicRoutes } from '../routers';
import { NOT_FOUND_PAGE } from '../utils/const';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AppRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={3000}>
        <Routes location={location}>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
          ))}

          <Route path="*" element={<Navigate to={NOT_FOUND_PAGE} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
