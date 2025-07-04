
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch} from "react-redux";



import Login from "./Login";
import Browser from "./Browse";



const Body = () => {

 


  const appRouters =createBrowserRouter([
    { 
      path: '/', 
      element: <Login/>
     },
    { path: '/browse', 
      element: <Browser/>
     },
    // Add more routes here...
  ]);

  

  return (
    // <div className="bg-gray-50 p-4">
      
      <RouterProvider router={appRouters}/>
      
    
  );
};

export default Body;