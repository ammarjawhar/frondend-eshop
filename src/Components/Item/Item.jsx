import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
 
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} onClick={window.scrollTo(0, 0)} />
      </Link>
      <div className="item-info">
        <h3 className="item-title">{name}</h3>
        <div className="item-price-container">
          <p className="item-price-new">${new_price}</p>
          <p className="item-price-old">${old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
