import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ShoppingPage from './ShoppingPage.jsx'
import ErrorPage from './ErrorPage.jsx'
import ShoppingCart from './components/shoppingCart/ShoppingCart.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/shoppingpage",
    element: <ShoppingPage/>
  },
  {
    path:"/shoppingcart",
    element: <ShoppingCart/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
