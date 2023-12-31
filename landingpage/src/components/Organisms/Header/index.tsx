import { Button } from "@/components/Atom/Button";
import SchovelaLogo from "@/components/Atom/Logo"
import { Routes } from "@/components/utilis/Routes";
import style from './Header.module.css'

export const Nav = [
  {
    lable:"Home",
    path:Routes.LandingPage
  },
  {
    lable:"About",
    path:Routes.About
  },
  {
    lable:"Team",
    path:Routes.Team
  },
  {
    lable:"Testimonials",
    path:Routes.Testimonials
  }
]

function Header() {
  return (
   <header className={style.header}>
      <SchovelaLogo />
    <ul className={style.navWrap}>
      {
        Nav.map((items, index) => {
          return(
            <li 
            key={index}
            className={style.li}
            >
              { items.lable }
            </li>
          )
        })
      }
    </ul>
    <Button>Get Acess Now</Button>
   </header>
  )
}

export default Header;
