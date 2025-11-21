import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Deals from './Component/Deals/Deals.jsx'
import ProductDetails from './Component/SharedFolder/ProductDetails/ProductDetails.jsx'
import Shop from './Component/ShopPages/Shop.jsx'
import ContactPage from './Component/ContactPage/ContactPage.jsx'
import Blog from './Component/Blogpage/Blog/Blog.jsx';
import {Provider} from "react-redux";
import store from "./Redux/Store.js"
import DashBoard from './Component/DashBoard/DashBoard.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,
        loader:()=>fetch('/categories.json'),
         Component:Home},
      {path:"/about",Component:About},
      {path:"/deals", Component:Deals},
      {path:"/shop",Component:Shop},
      {path:"/contact",Component:ContactPage},
      {path:"/vendors",Component:About},
      {path:"/mega",Component:About},
      {path:"/blog",Component:Blog},
      {path:"/pages",Component:ContactPage},
      {path:"/dashboard",Component:DashBoard},
      {path:"product/:id",
        loader:()=>fetch("/products.json"),
     element:<ProductDetails></ProductDetails>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
  </Provider>
 
)
