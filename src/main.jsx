
import '../public/styles/global.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from './provider/AppProvider';
// import { AppProvider } from './provider/AppProvider';
// import { router } from './router/AppRouter';
// import { RouterProvider } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <AppProvider/>

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
  
)