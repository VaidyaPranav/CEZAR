import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import './index.css'
import Events from './comopnents/events.jsx'
import App from './App.jsx'
import Technical from './comopnents/technical.jsx';
import Flashmob from './comopnents/flashmob.jsx';
import Cultnight from './comopnents/cultnight.jsx';
import NonTechnical from './comopnents/nontechnical copy.jsx';
import Home from './comopnents/Home.jsx';
import Organizing from './comopnents/organizing.jsx';
import Aboutus from './comopnents/Aboutus.jsx';
import Contactus from './comopnents/Contactus.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/events",
        element: <Events/>,
      },
      {
        path: "/technical",
        element: <Technical/>,
      },
      {
        path: "/nontechnical",
        element: <NonTechnical/>,
      },
      {
        path: "/flashmob",
        element: <Flashmob/>,
      },
      {
        path: "/cultnight",
        element: <Cultnight/>,
      },

      {
        path: "/Organizing",
        element: <Organizing/>,
      },
      {
        path: "/Home",
        element: <Home/>,
      },
      {
        path: "/Aboutus",
        element: <Aboutus/>,
      },
      {
        path: "/Contactus",
        element: <Contactus/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
