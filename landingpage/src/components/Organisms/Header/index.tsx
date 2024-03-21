import { Button } from "@/components/Atom/Button";
import SchovelaLogo from "@/components/Atom/Logo"
import { Routes } from "@/components/utilis/Routes";
import style from './style.module.css';
import Link from "next/link";

export const Nav = [
  {
    label:"Home",
    path:Routes.LandingPage
  },
  {
    label:"About",
    path:Routes.About
  },
  {
    label:"Team",
    path:Routes.Team
  },
  {
    label:"Testimonials",
    path:Routes.Testimonials
  }
]

function Header() {
  return (
   <div className={style.header}>
      <SchovelaLogo />
    <ul className={style.navWrap}>
      {
        Nav.map((items, index) => {
          return(
            <li 
            key={index}
            className={style.li}
            >
              <Link href={items.path} className="text-bold">{ items.label }</Link>
            </li>
          )
        })
      }
    </ul>
    <Button>Get Acess Now</Button>
   </div>
  )
}

export default Header;
