import empty from "../../assets/images/empty/images.png" 
import "./empty.css"

export const Empty = () => {
  return (
    <div className="container empty__wrapper">
      <img src={empty} alt="" />
      <h2>Empty</h2>

    </div>
  )
}

export default Empty