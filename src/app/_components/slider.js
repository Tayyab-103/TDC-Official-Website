"use client";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./slider.module.scss";
// import React from "react";
// import styles from "./YourComponent.module.css";/
import "aos/dist/aos.css";
import Aos from "aos";

const AutoSlider = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Marquee
      className={styles.slider}
      speed={70}
      pauseOnHover="true"
      data-aos="fade-down"
    >
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112058/alayacare_bt4o45.png"} alt="Loading" width={150} height={168}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112070/chex.ai_jtkrre.png"} alt="Loading" width={150} height={40} />
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112060/atoms_hgtsuu.png"} alt="Loading" width={150} height={32}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112069/bondai_gsvyf3.png"} alt="Loading" width={150} height={44}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112128/it-boost_xtvgha.png"} alt="Loading" width={150} height={40}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112151/swvl_sxuaah.png"} alt="Loading" width={150} height={58}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112164/uptok_xi5bmg.png"} alt="Loading" width={150} height={55}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112058/alayacare_bt4o45.png"} alt="Loading" width={150} height={168}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112070/chex.ai_jtkrre.png"} alt="Loading" width={150} height={40} />
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112060/atoms_hgtsuu.png"} alt="Loading" width={150} height={32}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112069/bondai_gsvyf3.png"} alt="Loading" width={150} height={44}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112128/it-boost_xtvgha.png"} alt="Loading" width={150} height={40}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112151/swvl_sxuaah.png"} alt="Loading" width={150} height={58}/>
      <Image className={styles.image} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112164/uptok_xi5bmg.png"} alt="Loading" width={150} height={55}/>
    </Marquee>
  );
};

export default AutoSlider;
