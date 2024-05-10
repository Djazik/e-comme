import { useSelector } from "react-redux";
import ProductCard from "../../components/card/ProductCard";

export const Wishlist = () => {
  const favourites = useSelector((state) => state.wishlist.favourites);
  
  return (
    <div className="container">
      <h1 className="text-center">Wishlist</h1>
      <div className="row">
        {favourites.length > 0 ? (
          favourites.map((item) => (
            <div key={item.id} className="col-lg-3 col-12">
              <ProductCard {...item} />
            </div>
          ))
        ) : (
          <p>No products in the wishlist</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
