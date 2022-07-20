import React from "react";
import "./Portfolio.css";

import movie1 from "../pic/movie1.png";
import hamburger from "../pic/hamburger.png";
import foodorder from "../pic/foodorder.png";


const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
           

            {
              <div className='box btn_shadow '>
              <div className='img'>
                  <img src= {movie1} alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Movie App</span>
                  <label>
                    <i className='far fa-heart'></i> React
                  </label>
              </div>
              <div className='title'>
                  <h2>Movie App is a ReactJS web application</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
                <a href="https://github.com/fationkrasniqi/movie-react" target="_blank">
                  <input className="buton1" type="button"  value="View project"></input>
                </a>
              </div>
            </div>} 

            {
              <div className='box btn_shadow '>
              <div className='img'>
                  <img src= {hamburger} alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Fast Food</span>
                  <label>
                    <i className='far fa-heart'></i> Wordpress
                  </label>
              </div>
              <div className='title'>
                  <h2>Fast Food / Restaurant Website Design</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
                <a href="https://www.youtube.com/watch?v=WL0u-aP_wug" target="_blank">
                  <input className="buton2" type="button"  value="View project"></input>
                </a>
                
              </div>
            </div>}

            {
              <div className='box btn_shadow '>
              <div className='img'>
                  <img src= {foodorder} alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Food order</span>
                  <label>
                    <i className='far fa-heart'></i> MERN
                  </label>
              </div>
              <div className='title'>
                  <h2>Food Order (Starlabs Intership)  </h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a> 
                <a href="https://github.com/fationkrasniqi/foodorder" target="_blank">
                  <input className="buton3" type="button"  value="View project"></input>
                </a>
              </div>
            </div>}

          


          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
