import './Cartitems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Cartitems = () => {
  const { removeFromCart, cartItems, getTotalAmount, all_products } =
    useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cartitems-format-main paragraph text-center">
        <p>products</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <>
              <div className="cartitems-format cartitems-format-main text-center">
                <img src={item.image} alt="" className="product-img" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <p className="cart-quantity border w-[30%] mx-auto  p-2">
                  {cartItems[item.id]}
                </p>
                <p>{cartItems[item.id] * item.new_price}</p>

                <div
                  className="remove-icon cursor-pointer
                   bg-red-600   text-white p-2 w-[50%]
                   m-auto "
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  X
                </div>
              </div>
              <hr />
            </>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total</h1>
          <div className="subtotal flx">
            <p>subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <div className="shipping flx">
            <p>shipping fee</p>
            <p>${getTotalAmount()> 0?20:0}</p>
          </div>
          <div className="total flx">
            <p>total</p>
            <p>${getTotalAmount()> 0?getTotalAmount()+20:0}</p>
          </div>

          <button className="chkout-btn">checkout</button>
        </div>
        <div className="promocode">
          <p>if you have a promo code type it here</p>
          <div className="promocode-input">
            <input type="text" placeholder="promo code" />
            <button>apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
