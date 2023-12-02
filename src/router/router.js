import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from '../views/home/Home'
import About from "../views/about/About";
import BaseLayout from "../views/layout/base_layout/BaseLayout";
import Contact from "../views/contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout/>,
      children:[
        {
            path:'/home',
            element: <Home/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
          path:'/contact',
          element: <Contact/>
      }
      ]
    },
  ]);

const Router = () =>{
    return (
        <RouterProvider router={router} />
      );
}

export default Router