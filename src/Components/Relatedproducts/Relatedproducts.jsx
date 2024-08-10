import './Relatedproducts.css';
import data from '../Assets/data.js';
import Item from '../Item/Item';

const Relatedproducts = () => {
  return (
    <div className="related-items">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-items">
        {data.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Relatedproducts;
