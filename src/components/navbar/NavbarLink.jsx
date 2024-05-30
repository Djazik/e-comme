import { BsBoxSeam } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import "./navbarlink.css"
import { NavLink } from "react-router-dom";

export const NavbarLink = () => {
  const HERO__ITEMS = [
    {
      id: 1,
      title: "Deals",
      icons: <MdOutlineLocalFireDepartment />,
      bgc: "#253D4E",
      bgcolor: "#3BB77E",
    },
    {
      id: 2,
      title: "Home",
      icon: <SlArrowDown />,
      bgc: "#3BB77E",
    },
    {
      id: 3,
      title: "About",
      bgc: "#253D4E",
    },
    {
      id: 4,
      title: "Shop",
      icon: <SlArrowDown />,
      bgc: "#253D4E",
    },
    {
      id: 5,
      title: "Vendors",
      icon: <SlArrowDown />,
      bgc: "#253D4E",
    },
    {
      id: 6,
      title: "Mega menu ",
      icon: <SlArrowDown />,
      bgc: "#253D4E",
    },
    {
      id: 7,
      title: "Blog ",
      icon: <SlArrowDown />,
      bgc: "#253D4E",
    },
    {
      id: 8,
      title: "Pages ",
      icon: <SlArrowDown />,
      bgc: "#253D4E",
    },
    {
      id: 9,
      title: "Contact",
    },
  ];

  return (
    <div className="">
      <div className="hero__lines"></div>
      <div className="container">
        <div className="browse__wrappers">
          <div className="browses">
            <BsBoxSeam />
            <div className="browse__titles">
            <h2 className="browse__titles">Browse</h2>
            </div>
            <select className="browse__opts" name="" id="">
              <option value="">All Categories</option>
            </select>
          </div>

          <div className="browse__boxs">
            <ul className="browse__uls">
              {HERO__ITEMS?.map(({ id, bgc, bgcolor, icon, title, icons }) => (
                <div className="browse__lis" key={id}>
                  <span className="first__icons" style={{ color: bgcolor }}>
                    {icons}
                  </span>
                  <li style={{ color: bgc }}>{title}</li>
                  <span className="browse__icons" style={{ color: bgcolor }}>
                    {icon}
                  </span>
                </div>
              ))}
              <NavLink to={"/contact"}> Contact</NavLink>
            </ul>
          </div>

          <div className="browse__contacts">
            <TfiHeadphoneAlt />

            <div className="hero__tittles">
              <h2 className="footer__numberss">1900 - 888</h2>
              <h2 className="footer__timess">24/7 Support Center</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__lines"></div>
    </div>
  );
};

export default NavbarLink;
