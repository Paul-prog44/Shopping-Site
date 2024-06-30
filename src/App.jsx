import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import ShoppingPage from './ShoppingPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import ShoppingCart from './components/shoppingCart/ShoppingCart.jsx';
import CartContext from './CartContext'; 

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

function App() {
const [cart, setCart] = useState([])

return (
    <CartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router}/>
    </CartContext.Provider>
)
}

export default App
