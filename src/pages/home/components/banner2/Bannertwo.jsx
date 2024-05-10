import "./bannertwo.css"
import { sneaker } from "../../../../assets/images"
export const Bannertwo = () => {
  return (
    <section className="sneakers">
    <div className="container">
      <div className="sneakers__content">
        <div className="sneakers__info">
          <h1 className="sneakers__title">Adidas Men Running Sneakers</h1>
          <h3 className="sneakers__subtitle">Performance and design. Taken right to the edge.</h3>
          <a href="#" className="sneakers__button">SHOP NOW</a>
        </div>
        <div className="sneakers__imgbox">
          <img src={sneaker} alt="image..." />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Bannertwo