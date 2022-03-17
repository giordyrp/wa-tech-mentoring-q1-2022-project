import React, { createContext, useState } from 'react';

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState('/');

  const value = {
    route,
    setRoute
  };

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};