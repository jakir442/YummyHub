import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            YummyHub is a leading platform for selling delicious and nutritious ready-made meals. We
            are committed to delivering the best dishes right to your doorstep.
          </p>
          <div className="footer-social-icons">
            <a href="https://instagram.com/jakirapriyan_19">
              <img src={assets.instagram_icon} alt="" />
            </a>
            <a href="https://twitter.com/@JakirApr">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://linkedin.com/in/jakir-apriyan-2689492a9">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+62-812-1433-0576</li>
            <li>jakirapriyan@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © YummyHub.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
