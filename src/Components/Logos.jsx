import React from "react";
import Logo1 from "../Assects/Imags/TNW _ The heart of tech.jpeg";
import Logo2 from "../Assects/Imags/GQ.jpeg";
import Logo3 from "../Assects/Imags/Taxi.png";
import "../Assects/css/Logos.css";

const Logos = () =>{
    return(
        <>
            <div className="Logos">
              <div className="logo1"><img src={Logo1} alt="logo" style={{width:"150px"}} /></div>
              <div className="logo2"><img src={Logo2} alt="logo" style={{width:"150px"}} /></div>
              <div className="logo3"><img src={Logo3} alt="logo" style={{width:"150px"}} /></div> 
              <div className="logo4"><i class="fa-brands fa-product-hunt fa-2xl"></i><span style={{fontSize:"30px"}}>Prduct hunt</span></div>
              <div className="logo5"><img src={Logo3} alt="logo" style={{width:"150px"}} /></div>
            </div>
        </>
    )
}

export default Logos;