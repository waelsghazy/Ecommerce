import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Layout from "./Layout";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";


function App() {
  const routers = createBrowserRouter([
    {path: '/', element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: '/products', element: <Products />},
      {path: '/contact', element: <Contact />},
      {path: '/cart', element: <Cart />},
    ]}
  ])
  return (
    <ShoppingCartProvider>
      <RouterProvider router={routers} />
    </ShoppingCartProvider>
  )
}

export default App;
