import { BsSend } from "react-icons/bs";
import "./banner.css"
export const Banner = () => {
  return (
    <div className="container">
    <div className="banner">
      <h2 className="banner__title">Fresh Vegetables <br /> Big discount</h2>
      <h4>Save up to 50% off on your first order</h4>
      <div className="banner__input">
       <span> <BsSend /></span>
        <input type="email" placeholder="Your emaill address" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
  )
}

export default Banner