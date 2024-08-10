import { useContext } from 'react';
import './Category.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="category">
      <img src={banner} alt="" className="banner" />
      <div className="cat-indexsort">
        <p>
          <span>showing 1-12 </span>out of 36 products
        </p>
        <div className="cat-sort">
          <p>Sort By</p> <IoIosArrowDropdownCircle className="dropdown" />
        </div>
      </div>
      <div className="products">
        {all_products
          .filter((product) => product.category === category)
          .map((product) => (
            <Item key={product.id} {...product} />
          ))}
      </div>
      <div className="more">
        <button>explore more</button>
      </div>
    </div>
  );
};

export default Category;
