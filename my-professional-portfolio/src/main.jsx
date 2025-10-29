import React from 'react'
import ReactDOM from 'react-dom/client'
import Error from './Components/Error/Error.jsx';
import Root from './Components/Root/Root.jsx';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Projects from './Components/Projects/Projects.jsx';

import Certificates from './Components/Certificates/Certificates.jsx';
import FrontEnd from './Components/Front-End/FrontEnd.jsx';
import Work from './Components/Work-Experience/Work.jsx';
import About from './Components/About/About.jsx';
import MobileDesign from './Components/UX/MobileDesign.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/frontEnd',
        element:<FrontEnd></FrontEnd>
      },
      {
        path:'/work',
        element:<Work></Work>
      },
      
      {
        path:'/education',
        element:<About></About>
      },
      {
        path:'/certificates',
        element:<Certificates></Certificates>
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/mobileProjects',
        element:<MobileDesign></MobileDesign>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
  </React.StrictMode>,
)
