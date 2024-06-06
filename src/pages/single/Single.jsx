import { useParams } from "react-router-dom";
import { useGetDetailProductQuery } from "../../context/api/ProductApi";
import { useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GiDirectionSigns } from "react-icons/gi";
import img from "../../assets/images/1.svg";
import img1 from "../../assets/images/2.svg";
import img2 from "../../assets/images/3.svg";
import img3 from "../../assets/images/4.svg";
import rate from "../../assets/images/rate.svg";
import { MdHomeFilled } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import Bannerthree from "../../components/banners/bannerthree/Bannerthree";
import "./Single.css"
import Loading from "../../components/loading/Loading";

export const Single = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  let {id} =  useParams()
  let { data, isLoading } = useGetDetailProductQuery(id);
  console.log(data)

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="single__hero container">
        <span className="hero__home">
          <MdHomeFilled />
        </span>
        <h2 className="single__title">Home</h2>
        <span className="hero__product">
          <SlArrowRight />
        </span>
        <h2 className="single__title">Product</h2>
        <span className="hero__product">
          <SlArrowRight />
        </span>
        <p className="single__text"> Seeds of Change Organic</p>
      </div>
      <div className="hero__line"></div>
      <section className="container">
        <div className="single__wrapper">
          <div className="single__photo">
            <div className="single__img">
              <img width={300} src={data?.image} alt="" />
              <h2>{data?.title}</h2>
              <h2> {data?.price} USD</h2>
            </div>
            <div className="single__photos">
              <img src={img} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="single__malumot">
            <button className="sale">Sale Off</button>
            <div className=""></div>
            <h2 className="seed">
              Seeds of Change <br /> Organic Quinoa, Brown
            </h2>

            <div className="ratee">
              <img src={rate} alt="" />
              <p>(32 reviews)</p>
            </div>

            <div className="usd">
              <h1>$38</h1>
              <div className="usdd">
                <h3>26% Off</h3>
                <h4>$52</h4>
              </div>
            </div>
           

            <p className="lorem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,{" "}
              <br />
              odio minus dolore impedit fuga eum eligendi.
            </p>

            <div className="size">
              <h3>Size / Weight:</h3>
              <h3>50g</h3>
              <h2>60g</h2>
              <h3>80g</h3>
              <h3>100g</h3>
              <h3>150g</h3>
            </div>
            <div className="cardd">
              <div className="siiiz">
                <h2>1</h2>
                <div className="siizes">
                  <SlArrowUp />
                  <SlArrowDown />
                </div>
              </div>

              <button className="add">
                <IoCartSharp /> Add to cart
              </button>
              <button className="heart">
                <FaRegHeart />
              </button>
              <button className="heart">
                <GiDirectionSigns />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Bannerthree />
1    </div>
  );
};

export default Single;
