import {  useSelector } from "react-redux";
import { Products } from "../home/components";
import Empty from "../../components/empty/Empty";

export const Wishlist = () => {
  let wishlist = useSelector(state => state.wishlist.value) 
  console.log(wishlist)
  return (
    <div>
      <h4 className="wishes">Wishes</h4>
    {wishlist.length > 0 ? (
        <Products   data={wishlist} />
      ) : (
        <Empty/>
      )}
    </div>
  );
};

export default Wishlist;
