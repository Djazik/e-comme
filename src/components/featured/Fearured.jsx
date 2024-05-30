import cake from "../../assets/images/burger.svg";
import cake1 from "../../assets/images/kivi.svg";
import cake2 from "../../assets/images/Peach.svg";
import cake3 from "../../assets/images/Apple.svg";
import cake4 from "../../assets/images/Snack.svg";
import cake5 from "../../assets/images/Vegetables.svg";
import cake6 from "../../assets/images/Strawberry.svg";
import cake7 from "../../assets/images/plum.svg";
import cake8 from "../../assets/images/Custard.svg";
import cake9 from "../../assets/images/Coffe & Tea.svg";
import "./featured.css"

export const Fearured = () => {
    const FeaturedCategories = [
        {
          id: 1,
          title: "HoCake & Milkme",
          items: "26 Items",
          imgage: cake,
          clsname: "elemet1",
        },
        {
          id: 2,
          title: "Oganic Kiwi",
          imgage: cake1,
          items: "28 Items",
          clsname: "elemet2",
        },
        {
          id: 3,
          title: "Peach",
          imgage: cake2,
          items: "14 Items",
          clsname: "elemet3",
        },
        {
          id: 4,
          title: "Red Apple",
          imgage: cake3,
          items: "54 Items",
          clsname: "elemet4",
        },
        {
          id: 5,
          title: "Snack",
          imgage: cake4,
          items: "56 Items",
          clsname: "elemet5",
        },
        {
          id: 6,
          title: "Vegetables",
          imgage: cake5,
          items: "72 Items",
          clsname: "elemet6",
        },
        {
          id: 7,
          title: "Strawberry",
          imgage: cake6,
          items: "36 Items",
          clsname: "elemet7",
        },
        {
          id: 8,
          title: "Black plum",
          imgage: cake7,
          items: "123 Items",
          clsname: "elemet8",
        },
        {
          id: 9,
          title: "Custard apple",
          imgage: cake8,
          items: "34 Items",
          clsname: "elemet9",
        },
        {
          id: 10,
          title: "Coffe & Tea",
          imgage: cake9,
          items: "89 Items",
          clsname: "elemet10",
        },
      ];
  return (
    <div className="container">
      <div className="feature">
        <ul className="feature_ul">
          <li className="feat">Featured Categories</li>
          <li className="ulfeat">Cake & Milk</li>
          <li className="ulfeat">Coffes & Teas</li>
          <li className="ulfeatli">Pet Foods</li>
          <li className="ulfeat">Vegetables</li>
        </ul>

        <div className="feature_box">
          {FeaturedCategories?.map((el) => (
           <div className="card__feature"  key={el.id}>
             <div className={el.clsname}>
              <img className="feature__img" src={el.imgage} alt="" />
              <h2 className="feature__title">{el.title}</h2>
              <p className="feature__items">{el.items}</p>
            </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Fearured