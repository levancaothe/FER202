import React from 'react';
import { Route } from 'react-router-dom';
import UserProfile from './UserProfile';

export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
  {
    path: '/users/:userId?',
    component: UserProfile,
  },
];

export const renderRoutes = () => {
  return routes.map((route, index) => {
    const Component = route.component;
    return (
      <Route
        key={index}
        path={route.path}
        element={<Component />}
      />
    );
  });
};
