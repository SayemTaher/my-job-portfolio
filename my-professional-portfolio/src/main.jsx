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
import Education from './Components/Education/Education.jsx';
import Certificates from './Components/Certificates/Certificates.jsx';

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
        path:'/education',
        element:<Education></Education>
      },
      {
        path:'/certificates',
        element:<Certificates></Certificates>
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
