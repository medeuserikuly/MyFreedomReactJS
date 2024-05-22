import React, { useContext } from 'react'
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
import Homework6 from './components/hw6/Homework6';
import ContextComponent from './components/ContextComponent';


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
    {
        path: "/hw6",
        element:<Homework6/>,
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextComponent>
        <RouterProvider router={router} />
    </ContextComponent>   
)
