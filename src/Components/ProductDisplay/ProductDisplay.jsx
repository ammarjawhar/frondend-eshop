import './ProductDisplay.css';
import star from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';

const ProductDisplay = ({ image, name, new_price, old_price, id }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="d-left">
        <div className="image-list">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" className="main-image" />
        </div>
      </div>

      <div className="d-right">
        <h1>{name}</h1>
        <div className="stars">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" />
          <p>(300 reviews)</p>
        </div>
        <div className="prices">
          <p className="new-price">${new_price}</p>
          <p className="old-price">${old_price}</p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore
          assumenda nobis vel, et eum, quo ea, corporis minima commodi quos.
          Voluptate voluptates dolore quasi accusamus deserunt veniam natus
          laborum!
        </p>
        <div className="display-sizes">
          <h1>Sizes</h1>
          <div className="sizes">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(id)}>
          Add To Cart
        </button>

        <div className="display-categories">
          <span>Category</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="display-categories">
          <span>Tags</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
