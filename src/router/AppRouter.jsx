
import {createBrowserRouter} from "react-router-dom"
import Layout from "../assets/components/Layout";
import HomePage from "../pages/home/HomePage";
import ArticleDetail from "../assets/components/ArticleDetail";










const children = [

    
        { element: <HomePage />, path: "/" },
        { element: <ArticleDetail />, path: "/articleDetail/:id" },
     
     
   

     
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
