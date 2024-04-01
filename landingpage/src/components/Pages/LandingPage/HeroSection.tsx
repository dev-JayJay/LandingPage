import Image from "next/image";
import style from "./Hero.module.css";
// import { Button } from "@/components/Atom/Button";
import styled from "styled-components";
import { useState, useEffect } from "react";

interface UserData {
  total_views: number;
  total_content: number;
}


const Hero = ({ data }: { data: UserData | null }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Only update 'userData' if 'data' has changed
    if (data !== userData) {
      setUserData(data);
    }
  }, [data, userData]); // Add 'userData' as a dependency
  
  // console.log("this is the data from the overview", totalViews);

  return (
    <div style={{margin: "0px",padding: "0px"}}>
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
                src="/images/playStore.svg"
                alt="schovela logo"
                width={150}
                height={70}
                className="col_2_image"
              />
            </button>
          </div>
          <div className={style.info_btn_wrapper} >
            <div className={style.info_btn}>
              {/* users number */}
              {userData !== null && (
                <>
                  <span>{userData.total_views}</span>
                  <p>Total views</p>
                </>
              )}
            </div>
            <div className={style.info_btn}>
              {/* downloads number */}
              {userData !== null && (
                <>
                  <span>{userData.total_content}</span>
                  <p>Total contents <br /> Consumed</p>
                </>
              )}
            </div>
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
