import './Relatedproducts.css';
import data from '../Assets/data.js';
import Item from '../Item/Item';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Relatedproducts = () => {
  const { BASE_URL } = useContext(ShopContext);
  const [data, setData] = useState([]);

  const fetchRelatedProducts = async () => {
    const res = await axios.get(`${BASE_URL}/api/product/related`);
    if (res.data.success) {
      setData(res.data.data);
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchRelatedProducts();
  }, []);
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
