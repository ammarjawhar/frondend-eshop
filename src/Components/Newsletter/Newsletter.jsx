import './Newletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>get exclusive offers for new products on your mail </h1>
      <p>subscribe to our newsletter and stay tuned</p>
      <div className="input-container">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
