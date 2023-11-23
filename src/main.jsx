import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Main from './Components/Layout/Main';
import ErrorPage from './Components/Utilites/ErrorPage/ErrorPage';
import Home from './Components/Pages/HomePage/Home/Home';
import Login from './Components/Pages/LoginPage/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/Utilites/AuthProvider/AuthProvider';
import ChefDetailsPage from './Components/Pages/HomePage/ChefDetailsPage/ChefDetailsPage';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/chefCollection/:id',
        element: <ChefDetailsPage />,
        loader: ({ params }) => fetch(`https://chef-zone-server-production.up.railway.app/chefCollection/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </QueryClientProvider>
)