import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import Category from './Pages/Category.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Auth from './Pages/Auth.jsx';
import ShopContextProider from '../src/Context/ShopContext.jsx';
import men_banner from '../src/Components/Assets/banner_mens.png';
import women_banner from '../src/Components/Assets/banner_women.png';
import kid_banner from '../src/Components/Assets/banner_kids.png';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Shop />,
      },

      {
        path: 'mens',
        element: <Category category="men" banner={men_banner} />,
      },
      {
        path: 'womens',
        element: <Category category="women" banner={women_banner} />,
      },
      {
        path: 'kids',
        element: <Category category="kid" banner={kid_banner} />,
      },

      {
        path: 'product',
        element: <Product />,
        children: [{ path: ':productId', element: <Product /> }],
      },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Auth /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProider>
    <RouterProvider router={router} />
  </ShopContextProider>
);
