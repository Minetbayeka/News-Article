
import { RouterProvider } from "react-router-dom";
import { AppContext } from "./AppContext";
import { router } from "../router/AppRouter";




const ContextProvider = ({children}) => {

 


  return (
    <AppContext.Provider
    value={{}}
    
    >
       {children} 
      
    </AppContext.Provider>
  );
};



export const AppProvider = () => {
  return(
    
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  
  );
};










