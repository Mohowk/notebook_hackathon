import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <AdminContextProvider>
      <BrowserRouter>
        <Router>
          <Route path='/' element={''} />
        </Router>
      </BrowserRouter>
    </AdminContextProvider>
  );
};

export default MainRoutes;