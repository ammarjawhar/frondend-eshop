import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcupms from '../Components/Breadcurpms/Breadcumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts';
const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((p) => p.id === Number(productId));
  if (!product) {
    return <div>Product Not Found</div>;
  } else {
    return (
      <div className="product">
        <Breadcupms {...product} />
        <ProductDisplay {...product} />
        <Descriptionbox />
        <Relatedproducts {...product} />
      </div>
    );
  }
};

export default Product;
