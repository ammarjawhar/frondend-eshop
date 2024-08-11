import { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);
import axios from 'axios';

const defaultCart = () => {
  let cart = {};
  for (let i = 0; i <= 100 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProider = (props) => {
  const BASE_URL = 'https://e-shop-backend-alpha.vercel.app';
  const [cartItems, setCartItem] = useState(defaultCart());
  const [all_products, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/api/product/list`, {
      withCredentials: true,
    });
    if (response.data.success) {
      setAllProducts(response.data.data);
    } else {
      console.log('error');
    }
  };

  const getTotalItems = () => {
    let totalItems = 0;
    for (let items in cartItems) {
      if (cartItems[items] > 0) {
        totalItems += cartItems[items];
      }
    }
    return totalItems;
  };
  const addToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    if (localStorage.getItem('Auth-Token')) {
      const token = localStorage.getItem('Auth-Token');
      axios.post(
        `${BASE_URL}/api/cart/add`,
        { id, token },
        { withCredentials: true }
      );
    }
  };
  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    if (localStorage.getItem('Auth-Token')) {
      const token = localStorage.getItem('Auth-Token');
      axios.post(
        `${BASE_URL}/api/cart/remove`,
        { id, token },
        { withCredentials: true }
      );
    }
  };
  const fetchCart = async () => {
    if (localStorage.getItem('Auth-Token')) {
      const token = localStorage.getItem('Auth-Token');
      const response = await axios.post(
        `${BASE_URL}/api/cart/list`,
        { token },
        { withCredentials: true }
      );
      if (response.data.success) {
        setCartItem(response.data.data);
      } else {
        console.log('error');
      }
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(items)
        );
        totalAmount += cartItems[items] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalItems,
    BASE_URL,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProider;
