import Image from "next/image";
import style from "./Hero.module.css"
import { Button } from "@/components/Atom/Button";
import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

export const ButtonContainer = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${(props) =>
  (props.gap ?
  `${props.gap}px`
  :'30px')};
`;
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  display: flex;
  align-items: center;
`;


function Hero() {
    return (
      <section className={style.wrapper} id="Hero">
        <div className={style.item_one}>
        <h4>
            Explore <span>Schovela !</span>
          </h4>
          <h5>Get access to free, verified & readable Edu-resources.</h5>
          <h6>Get acces to numerous resources by downloading our app either on Apple store or Play store.</h6>
          <ButtonContainer>
          <Button>
           <ButtonContainer>
            <DiAndroid className='text-white text-2xl'/>
            <p>Get our App</p>
           </ButtonContainer>
          </Button>
          <Button Variant="normal">
            <ButtonContainer>
            <FaApple className='text-black text-2xl'/>
            <p>Get our App</p>
            </ButtonContainer>
          </Button>
          </ButtonContainer>
          <ButtonContainer gap={60}>
            <div className={style.info_btn}>
              <span>172+</span>
              <p>Users <br/> so far</p>
            </div>
            <div className={style.info_btn}>
              <span>435+</span>
              <p>Total Content <br/> consumed</p>
            </div>
          </ButtonContainer>
        </div>
        <Image 
        src='/images/college_student-removebg-preview 2.png'
        alt='schovela logo'
        width={500}
        height={300}
        />
      </section>
    )
  }
  
  export default Hero;
  