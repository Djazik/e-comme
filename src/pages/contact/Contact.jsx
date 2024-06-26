import Bannerthree from "../../components/banners/bannerthree/Bannerthree"
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer"
import { MdHome } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { SlArrowRight } from "react-icons/sl";
import map from "../../assets/images/map.svg";
import cc from "../../assets/images/ccc.jpg";

export const Contact = () => {
  return (
    <div>
       <section className="">

    <div className="line__admin"></div>
    <div className="container">
      <div className="admin__hero">
        <div className="admin__icon">
          <MdHome />{" "}
        </div>
        <NavLink to={"/"} className="admin__title">Home</NavLink>
        <span className="span__icon">
          {" "}
          <SlArrowRight />
        </span>
        <h2 className="admin__text">Contact</h2>


      </div>
    </div>
    <div className="line__admin"></div>

    <div className="container">
      <div className="how__wrapper">
        <div className="how">
          <h2 className="how__title">How can help you ?</h2>
          <div className="admin">
            <h1 className="admin__titlee">CONTACT</h1>
            <p className="how__titlee">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
              <br /> leo
            </p>
            <p className="how__titlee">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
        <div className="how__box">
          <div className="visit">
            <h2 className="visit__title">01. Visit Feedback</h2>
            <p className="how__titlee">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
              <br />
              leo.
            </p>
          </div>

          <div className="visite">
            <h2 className="visit__titlee">03. Billing Inquiries</h2>
            <p className="how__titlee">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
        <div className="how__box">
          <div className="visit">
            <h2 className="visit__title">02. Employer Services</h2>
            <p className="how__titlee">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
              <br /> leo.
            </p>
          </div>

          <div className="visite">
            <h2 className="visit__title">04.General Inquiries</h2>
            <p className="how__titlee">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
              <br /> leo.
            </p>
          </div>
        </div>
      </div>

      <div className="admin__img">
        <img src={map} alt="" />
      </div>

      <div className="office__wrapper">
        <div className="office">
          <h3 className="office__title">Office</h3>
          <h2 className="office__text">
            205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890
            <br />
            Email: contact@Evara.com
          </h2>
          
          <div className=""><button className="offce__btn"><TiLocationOutline /> View map</button></div>
        </div>

        <div className="office">
          <h3 className="office__title">Studio</h3>
          <h2 className="office__text">
          205 North Michigan Avenue, Suite 810 <br />
          Chicago, 60601, USA <br />
          Phone: (123) 456-7890
            <br />
            Email: contact@Evara.com
          </h2>
          
          <div className=""><button className="offce__btn"><TiLocationOutline /> View map</button></div>
        </div>

        <div className="office">
          <h3 className="office__title">Shop</h3>
          <h2 className="office__text">
          205 North Michigan Avenue, Suite 810 <br />
            Chicago, 60601, USA <br />
            Phone: (123) 456-7890
            <br />
            Email: contact@Evara.com
          </h2>
          
          <div className=""><button className="offce__btn"><TiLocationOutline /> View map</button></div>
        </div>
      </div>

      <div className="cantact__wrapper">
        <div className="cantact__box">
          <div className="contact__texts">
          <h3 className="office__title">Contact form</h3>
          <h1 className="contact__totle">Drop Us a Line</h1>
          <p className="office__text">
          Your email address will not be published. Required fields are marked *
          </p>

          <div className="contact__inp">
           <div className="inppp">
              <div className="inp__box">
                 <input type="text" className="inp__box" placeholder="First Name" />
                 <input type="text"  placeholder="Your Phone" />
               </div>
           <div className="inp__box">
                <input type="text"  placeholder=" Your Email" />
                <input type="text"  placeholder=" Subject" />
           </div>
           </div>
           <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="">
           <button className="contact__btn">Send message</button>
            </div>
          </div>
          </div>
        </div>
        <div className="contact__img">
            <img src={cc} alt="" />
        </div>
      </div>
    </div>

  </section>
  <Bannerthree/></div>
  )
}

export default Contact