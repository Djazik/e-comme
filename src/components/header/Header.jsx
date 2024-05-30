import   HeroNav  from "../navbar/HeroNav"
import Navbar from "../navbar/Navbar"
import NavbarLink from "../navbar/NavbarLink"


export const Header = () => {
  return (
    <div>
      <HeroNav/>
      <Navbar/>
      <NavbarLink/>
    </div>
  )
}

export default Header