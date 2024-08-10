import './Breadcrumbs.css';
import breadArrow from '../Assets/breadcrum_arrow.png';
const Breadcupms = ({ category, name }) => {
  
  return (
    <div className="breadcrumb">
      <p>
        HOME <img src={breadArrow} alt="" /> SHOP
        <img src={breadArrow} alt="" /> {category}
        <img src={breadArrow} alt="" /> {name}
      </p>
    </div>
  );
};

export default Breadcupms;
