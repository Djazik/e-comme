import Seller from "../../components/card/seller/Seller";
import { Banner, Products } from "./components";
import Bannertwo from "./components/banner2/Bannertwo";
import Bannerfoo from "./components/bannerfoo/Bannerfoo";

export const Home = () => {
  return (
    <div>
      
      <Banner />
       <Seller/>
      <Products />
    <Bannertwo/>
    <Bannerfoo/>
    </div>
  );
};

export default Home;
