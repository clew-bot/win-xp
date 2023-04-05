import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  Desktop  from '../pages/Desktop/desktop'
import  Login  from '../pages/Login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/desktop",
    Component: Desktop,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
