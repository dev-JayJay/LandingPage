import Image from "next/image";
import style from "./Hero.module.css";
// import { Button } from "@/components/Atom/Button";
import styled from "styled-components";
// import { FaApple } from "react-icons/fa";
// import { DiAndroid } from "react-icons/di";
import { useState, useEffect } from "react";

const Hero = ({ data }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    // Only update 'userData' if 'data' has changed
    if (data !== userData) {
      setUserData(data);
    }
  }, [data, userData]); // Add 'userData' as a dependency

  console.log("this is the data from the overview", userData);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.item_one}>
          <h4>
            Explore <span>Schovela !</span>
          </h4>
          <h5>Get access to free, verified & readable Edu-resources.</h5>
          <h6>
            Get acces to numerous resources by downloading our app either on
            Apple store or Play store.
          </h6>
          <div className={style.HeroButton}>
            <button>
              {/* replace with image */}
              <Image
                src="/images/appstore.svg"
                alt="schovela logo"
                width={150}
                height={70}
                className="col_2_image"
              />
            </button>
            <button>
              {/* replace with image */}
              <Image
                src="/images/playstore.svg"
                alt="schovela logo"
                width={150}
                height={70}
                className="col_2_image"
              />
            </button>
          </div>
          <div>
            <div className={style.info_btn}>
              {/* users number */}
              {userData && (
                <>
                  <span>{userData.Users}</span>
                  <p>Total Users</p>
                </>
              )}
            </div>
            <div className={style.info_btn}>
              {/* downloads number */}
              {userData && (
                <>
                  <span>{userData.Downloads}</span>
                  <p>Total Downloads</p>
                </>
              )}
            </div>
            <div className={style.info_btn}>{/* users nunber */}</div>
          </div>
        </div>
        <Image
          src="/images/college_student-removebg-preview 2.png"
          alt="schovela logo"
          width={500}
          height={150}
          className={style.HeroImage}
        />
      </div>
    </div>
  );
};
export default Hero;
