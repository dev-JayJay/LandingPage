import { Button } from "@/components/Atom/Button";
import SchovelaLogo from "@/components/Atom/Logo"
import { Routes } from "@/components/utilis/Routes";
import style from './Header.module.css'
import Link from "next/link";

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
              <Link href={items.path} className="text-bold">{ items.lable }</Link>
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
