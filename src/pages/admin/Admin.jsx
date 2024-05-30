import { memo, React } from "react";
import Bannerthree from "../../components/banners/bannerthree/Bannerthree"
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer"
import { MdHome } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { SlArrowRight } from "react-icons/sl";
import map from "../../assets/images/map.svg";
import cc from "../../assets/images/ccc.jpg";
import "./Admin.css"


export const Admin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
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
          <h2 className="admin__text">Admin</h2>

    <button className="logout" onClick={handleLogout}>Logout</button>

        </div>
      </div>
      <div className="line__admin"></div>
      <div className="how__wrapper container">
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
     

    </section>
  
  <Footer/>
  </div>
  )
}

export default memo(Admin)