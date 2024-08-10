import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import heroImage from '../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2>New Arrivals Only</h2>
        <div className="content">
          <div className="hand-icon">
            <p>New</p>
            <img src={handIcon} alt="hero" />
          </div>
          <p>Collection </p>
          <p>For Every One</p>
        </div>
        
          <button className='hero-btn'>latest collections</button>
       
      </div>
      <div className="right">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
