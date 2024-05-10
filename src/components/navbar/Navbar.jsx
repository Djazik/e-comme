import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import "./Navbar.css";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="d-flex justify-content-between w-100">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="nav-list">
            <Link to={"/"} className="nav-link">Home</Link>
            <Link className="nav-link">Bags</Link>
            <Link className="nav-link">Sneakers</Link>
            <Link className="nav-link">Belt</Link>
            <Link to={"/contact"} className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
