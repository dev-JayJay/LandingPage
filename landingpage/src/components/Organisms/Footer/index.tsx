import styled from "styled-components"
import style from "@/components/Organisms/Header/Header.module.css"

export const footer = styled.div`
background-color: #27272A;
`;

function Footer() {
  return (
    <footer>
    <div className={style.wrapper}>
    <div className={style.item_one}>
    <h4>
        Explore <span>Schovela !</span>
      </h4>
      <h5>Get access to free, verified & readable Edu-resources.</h5>
      <h6>Get acces to numerous resources by downloading our app either on Apple store or Play store.</h6>
    </div>
    </div>
    </footer>
  )
}

export default Footer;
