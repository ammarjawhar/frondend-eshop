import './Offers.css';
import offerImage from '../Assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className="offers">
      <div className="left">
        <h1>Exclusive </h1>
        <h1>Offers For You</h1>
        <p>Get upto 50% off</p>
        <button className='btn'>Check Now</button>
      </div>
      <div className="right">
        <img src={offerImage} alt="offer image" />
      </div>
    </div>
  );
};

export default Offers;
