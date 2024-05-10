import "./bannerfoo.css";
import {
  no1,
  no2,
  no3,
  no4,
  no5,
  no6,
  no7,
} from "../../../../assets/images/base/index";
export const Bannerfoo = () => {
  return (
    <section className="base-section">
      <div className="container">
        <div className="base">
          <div className="base-flex">
            <div className="base__item">
              <div className="base__item-col">
                <img
                  src={no1}
                  alt="shopping"
                  className="base__item-img"
                  width={100}
                  height={65}
                />
              </div>
              <h2 className="base__item-h2 top">FREE SHIPPING</h2>
              <p className="base__item-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="base__item">
              <div className="base__item-col">
                <img
                  src={no2}
                  alt="shopping"
                  className="base__item-img"
                  width={69}
                  height={78}
                />
              </div>
              <h2 className="base__item-h2">100% REFUND</h2>
              <p className="base__item-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="base__item">
              <div className="base__item-col">
                <img
                  src={no3}
                  alt="shopping"
                  className="base__item-img"
                  width={68}
                  height={89}
                />
              </div>
              <h2 className="base__item-h2 bottom">SUPPORT 24/7</h2>
              <p className="base__item-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="base__item-center">
            <h2 className="base__item-heading">LATEST NEWS</h2>
          </div>
          <div className="base-flex">
            <div className="base__box">
              <div className="base-images">
                <img src={no4} alt="nike" className="base__image-kronos nike" />
              </div>
              <div className="base-content">
                <span className="base-content__span">01 Jan, 2015</span>
                <h2 className="base-content__h2">Fashion Industry</h2>
                <p className="base-content__p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="base__box">
              <div className="base-images">
                <img
                  src={no5}
                  alt="figma"
                  className="base__image-kronos figma"
                />
              </div>
              <div className="base-content">
                <span className="base-content__span">01 Jan, 2015</span>
                <h2 className="base-content__h2">Best Design Tools</h2>
                <p className="base-content__p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="base__box">
              <div className="base-images">
                <img
                  src={no6}
                  alt="kronos"
                  className="base__image-kronos kronos"
                />
              </div>
              <div className="base-content">
                <span className="base-content__span">01 Jan, 2015</span>
                <h2 className="base-content__h2">HR Community</h2>
                <p className="base-content__p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="base__item-middle">
            <h2 className="base__item-heading">FEATURED PRODUCTS</h2>
          </div>
          <div className="base-flex">
            <div className="base__square">
              <div className="base-image">
                <img src={no7} alt="shoes" className="base__image-shoes" />
              </div>
              <div className="base-body">
                <h2 className="base-body__h2">Blue Swade Nike Sneakers</h2>

                <span className="base-body__span">
                  $499 <span class="base-body__spanafter">$599</span>
                </span>
              </div>
            </div>
            <div className="base__square">
              <div className="base-image">
                <img src={no7} alt="shoes" className="base__image-shoes" />
              </div>
              <div className="base-body">
                <h2 className="base-body__h2">Blue Swade Nike Sneakers</h2>

                <span className="base-body__span">
                  $499 <span class="base-body__spanafter">$599</span>
                </span>
              </div>
            </div>
            <div className="base__square">
              <div className="base-image">
                <img src={no7} alt="shoes" className="base__image-shoes" />
              </div>
              <div className="base-body">
                <h2 className="base-body__h2">Blue Swade Nike Sneakers</h2>

                <span className="base-body__span">
                  $499 <span className="base-body__spanafter">$599</span>
                </span>
              </div>
            </div>
          </div>
          <form className="base-form">
            <input
              type="text"
              className="base-form__input "
              placeholder="Search query..."
            />
            <button className="base-form__btn">Search</button>
          </form>
        </div>
        <div className="base-mobile">
          <div className="recommend__card">
            <h1 className="recommend__card-title">Recomended Product</h1>
            <h4 className="recommend__card-subtitle">
              We recommend the best for you
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannerfoo;
