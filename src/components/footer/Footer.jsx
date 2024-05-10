import "./footer.css"
import {logo,Brands} from "../../assets/images"
import { NavLink } from "react-router-dom"
import Facebook from "../../assets/icons/Facebook"
import Twitter from "../../assets/icons/Twitter"
export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer_list">
        <div className="footer_list-up">
          <div className="list-up-logo">
            <NavLink to={"/"} className="logo">
              <img src={logo} alt="" />
              
            </NavLink>
            <p className="footer_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>
          <div className="list-up-info">
            <h2 className="footer_titles">Follow Us</h2>
            <p className="footer_text">Since the 1500s, when an unknown printer took a galley of type and
              scrambled.</p>
            <div className="up-info-brand">
              <Facebook/>
              <Twitter/>
            </div>
          </div>
          <div className="list-up-info">
            <h2 className="footer_titles">Contact Us</h2>
            <p className="footer_text2">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footer_list-down">
          <div className="list-down-info">
            <h2 className="footer_titles">Infomation</h2>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Infomation</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="list-down-info">
            <h2 className="footer_titles">Service</h2>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Infomation</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="list-down-info">
            <h2 className="footer_titles">My Account</h2>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Infomation</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="list-down-info">
            <h2 className="footer_titles">Our Offers</h2>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Infomation</a></li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="byinfo">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <img className="footer__img" src={Brands} alt="" />
      </div>
    </div>
  </footer>
  )
}

export default Footer