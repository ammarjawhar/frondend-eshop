import './Popular.css';
import Item from '../Item/Item';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../../Context/ShopContext';
const Popular = () => {
  const { BASE_URL } = useContext(ShopContext);
  const [popularItems, setPopularItems] = useState([]);

  const fetchPopularItems = async () => {
    const res = await axios.get(`${BASE_URL}/api/product/popular`);
    if (res.data.success) {
      setPopularItems(res.data.data);
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchPopularItems();
  }, []);
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-items">
        {popularItems.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
