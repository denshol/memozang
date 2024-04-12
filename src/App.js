import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Root from './components/Root';
import "./index.css";
import MemberTemplate from './components/MemberTemplate';
import store from './store/store';


const App = () => {

  const router = createBrowserRouter([
    {
     path:"/",
     element:<Root/>,
     errorElement:<NotFound/>,
     children: [
       {index:true,element:<Home/>},
       {path:"/product",element:<Product/>},
       {path:"/todo",element:<MemberTemplate/>}
     ],
   },
   ]);


   

  return (
    <RouterProvider router={router}/>
      
  );
};

export default App;
