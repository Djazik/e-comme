import "./banner.css"
import rasm from "../../../../assets/images/hero-img/hero-card1.png"
import rasm1 from "../../../../assets/images/hero-img/hero-card2.png"
import rasm2 from "../../../../assets/images/hero-img/hero-card3.png"
const Banner = () => {
  return (
    <section className="hero" id="hero">
    <div className="container hero-container">
        <div className="hero-content">
            <h1 className="hero-title">Super Flash Sale 50% Off</h1>
        </div>
        <div className="hero-cards">
          
            <div className="hero-item">
                <span className="hero-item-title">FS-QUILTED MAXI CROSS BAG</span>
                <img src={rasm} alt="product image" />
                <div className="hero-item-bottom">
                    <span className="hero-item-discount"><span>$534,33 </span><em>24% Off</em></span>
                    <span className="hero-item-price">$299,43</span>
                </div>
            </div>
            {/* Second hero item */}
            <div className="hero-item">
                <div className="hero-item-top">
                    <span className="hero-item-title" id="hero-second">FS - Nike Air Max 270 React...</span>
                    <span className="hero-item-price">$299,43</span>
                </div>
                <img src={rasm1} alt="product image" />
                <div className="hero-item-bottom" id="hero-second-btm">
                    <span className="hero-item-discount"><span>$534,33 </span><em>24% Off</em></span>
                </div>
            </div>
            {/* Third hero item */}
            <div className="hero-item">
                <div className="hero-item-top hero-third">
                    <span className="hero-item-title">FS - Nike Air Max 270 React...</span>
                    <span className="hero-item-discount "><span>$534,33 </span><em>24% Off</em></span>
                </div>
                <img src={rasm2} alt="product image" />
                <div className="hero-item-bottom" id="hero-third-btm">
                    <span className="hero-item-price">$299,43</span>
                </div>
            </div>
        </div>
        {/* Hero timer */}
        <div className="hero-timer">
            <span className="hero-counter">08</span>
            <span className="hero-sep">:</span>
            <span className="hero-counter">34</span>
            <span className="hero-sep">:</span>
            <span className="hero-counter">52</span>
        </div>
    </div>
</section>
  )
}

export default Banner