import { Button } from "@/components/Atom/Button";
import SchovelaLogo from "@/components/Atom/Logo"
import { Routes } from "@/components/utilis/Routes";
import style from './style.module.css';
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState(false);
  return (
   <div className={style.header}>
      <SchovelaLogo />
      <ul className={`${style.navWrap} ${showMenu ? style.showMenu : ""}`}>
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
    <div onClick={()=> setShowMenu(!showMenu)} className={style.Button}>{ showMenu ? <CgClose /> : <HiOutlineMenuAlt2 /> }</div>
    <Button className={style.btnAcess} >Get Acess Now</Button>
   </div>
  )
}

export default Header;
