import style from "./footer.module.css"
import { Routes } from "@/components/utilis/Routes";


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

function Footer() {
  return (
    <section className={style.footerWrap}>
    <div>
    <h4>
        Schovela<span> !</span>
      </h4>
      <h5>Your go to app for free verified & readabl Edu-resources.</h5>
    </div>
    <div className={style.container}>
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
    <p>All Right Reserved  Schovela</p>
    </div>
    </section>
  )
}

export default Footer;
