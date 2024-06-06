import { useState } from "react"
import Banner from "../../components/banners/banner/Banner"
import Bannerthree from "../../components/banners/bannerthree/Bannerthree"
import Bannertwo from "../../components/banners/bannertwo/Bannertwo"
import Best from "../../components/best/Best"
import Fearured from "../../components/featured/Fearured"
import { useGetProductsQuery, useGetDetailProductQuery } from "../../context/api/ProductApi"
import { Products } from "./components"
import Loading from "../../components/loading/Loading"

export const Home = () => {
  const [offset, setOffset] = useState(1)
 let {data, isLoading,error} = useGetProductsQuery({limit:5 * offset})
 let {data: detailProduct, isLoading:isDetailLoading} = useGetDetailProductQuery(4)
 
 if (isLoading) {
  return <Loading />;
}
  return (
    <div>
      <Banner/>
      <Fearured/>
      <Bannertwo/>
      <Products title="all products" data={data}/>
      <div className="product-btn container">
              <button
              // disabled={count === 20}
              onClick={() => setOffset(p => p + 1)}
              className="btn-see"
              >
                Add card
              </button>
            </div>
      <Bannerthree/>
      <Best/>
    </div>
  )
}

export default Home