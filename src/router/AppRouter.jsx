
import {createBrowserRouter} from "react-router-dom"
import Layout from "../assets/components/Layout";
import HomePage from "../pages/home/HomePage";









const children = [

    //   { element: <HomePage />, path: "/home" },
        { element: <HomePage />, path: "/" },
     
     
   

     
];



export const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "",
      errorElement: (
        <a href="/" className="text-center">
          This page does not exist
        </a>
      ),
      children,
    },
  ]);
