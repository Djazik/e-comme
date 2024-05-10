import ProductCard from "../../../../components/card/ProductCard";
import { useGetProductsQuery } from "../../../../redux/services/productServices";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();


  return (
    <div className="container">
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className="row g-2">
            {products.map((product) => (
          <div key={product.id} className="col-lg-3">
              <ProductCard  {...product} />
          </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
