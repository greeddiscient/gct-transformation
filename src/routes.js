import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import DashboardView from 'src/views/dashboard/Dashboard';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <DashboardView /> },
      { path: 'mob', element: <DashboardView /> },
      { path: 'ent', element: <DashboardView /> },
      { path: 'cons', element: <DashboardView /> },
      { path: 'wib', element: <DashboardView /> },
      { path: 'db', element: <DashboardView /> },
      { path: 'nits', element: <DashboardView /> },
      { path: 'fin', element: <DashboardView /> },
      { path: 'hcm', element: <DashboardView /> },
      { path: 'sp', element: <DashboardView /> },
      { path: 'gct', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
