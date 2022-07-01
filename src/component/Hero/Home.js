import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";

import fation from "../pic/fation.jpg";
import react3 from "../pic/react3.png";
import angular from "../pic/angular.png";
import javascript3 from "../pic/javascript3.png";


const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h1>
              Hi, I’m <span>Fation Krasniqi</span>
            </h1>
            <h2>
              a
              <span>
                 -  Website developer
              </span>
            </h2>

            <p>Hi! I'm Fation Krasniqi, Front-end Developer from Kosovo. I'm extremely passionate about design and creating great digital experiences, balancing beauty and performance. If you're looking for a custom and unique website, feel free to contact me and I'll be glad to help you with your project.</p>

            <div className='hero_btn d_flex'>
            
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={react3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={angular} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={javascript3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={fation} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
