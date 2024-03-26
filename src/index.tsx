import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Communication from './Pages/Communication';
import PrivateLesson from './Pages/PrivateLesson';
import Salon from './Pages/Salon';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/communication',
    element: <Communication />
  },
  {
    path: '/privateLesson',
    element: <PrivateLesson />
  },
  {
    path: '/salon',
    element: <Salon />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
