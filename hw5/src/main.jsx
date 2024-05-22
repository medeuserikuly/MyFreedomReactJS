import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Users from './components/users/Users';
import User from './components/user/User';
import NotFound from './components/notFound/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "users",
        element: <Users/>,
    },
    {
        path: "users/:id",
        element: <User/>,
    },
    {
        path: "/404",
        element: <NotFound/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
