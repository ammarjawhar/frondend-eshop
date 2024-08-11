import './NewCollections.css';
import Item from '../Item/Item';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../../Context/ShopContext';

const NewCollections = () => {
  const { BASE_URL } = useContext(ShopContext);
  const [new_collection, setNewCollection] = useState([]);
  const fetchNewCollections = async () => {
    const res = await axios.get(`${BASE_URL}/api/product/newcollection`);
    if (res.data.success) {
      setNewCollection(res.data.data);
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchNewCollections();
  }, []);
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="new-collections-items">
        {new_collection.map((item) => {
          return <Item className="collection-item" key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
