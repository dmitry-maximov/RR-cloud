import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../routers';
import { NOT_FOUND_PAGE } from '../utils/const';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}

      <Route path="*" element={<Navigate to={NOT_FOUND_PAGE} />} />
    </Routes>
  );
};

export default AppRouter;
