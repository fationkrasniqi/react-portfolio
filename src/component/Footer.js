import React from "react";
import fationn from "./pic/fationn.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={fationn} width={100} height={50} alt=""></img>
          </div>
          <p>© 2022. All rights reserved by Fation Krasniqi.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
