import React from "react";
import "../Assects/css/Build.css";
import buildImg from "../Assects/Imags/Laptop.jpeg";
import Buildlogo from "../Assects/Imags/folders-svgrepo-com Build.svg";
import Buildlogo1 from "../Assects/Imags/memo-pad-svgrepo-com Build.svg";
import Buildlogo2 from "../Assects/Imags/presentation-screen-show-svgrepo-com Build.svg";
import Buildlogo3 from "../Assects/Imags/open-book-svgrepo-com Build.svg";
import buildImgs from "../Assects/Imags/saturn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Build = () => {
  return (
    <>
      <div className="build">
        <div className="build-box">
          <div className="buid-cover">
            <div className="buildImg1">
              <img src={buildImg} alt="" />
            </div>
            <div className="BuildImg2">
              <img src={buildImgs} alt="" />
            </div>
            <button className="ui-btn_box">See example Assets</button>
          </div>
          <div className="build-main">
            <h3>Build a beautiful brand on time and on budget</h3>
            <p>
              Kickstart your business with thousands of{" "}
              <strong> ready-to-use </strong>design assets.
            </p>
            <div className="Notes">
              <ul>
                <li>
                  <FontAwesomeIcon icon="fa-regular fa-file" />
                  {""}
                  Logo design files{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                  {""} Social profile icons
                </li>
                <li>
                  <FontAwesomeIcon icon="fa-regular fa-credit-card" />
                  {""} Business card designs
                </li>
                <li>
                  <FontAwesomeIcon icon="fa-regular fa-square" size="2xs" />
                  <FontAwesomeIcon icon="fa-regular fa-circle" size="2xs" />
                  Animated designs
                </li>
                <li>
                  <img src={Buildlogo} alt="" style={{ width: "20px" }} />{" "}
                  Letterhead templates
                </li>
                <li>
                  <img src={Buildlogo1} alt="" style={{ width: "20px" }} />{" "}
                  Social media designs
                </li>
                <li>
                  <img src={Buildlogo2} alt="" style={{ width: "20px" }} />{" "}
                  Presentation templates
                </li>
                <li>
                  <img src={Buildlogo3} alt="" style={{ width: "20px" }} />{" "}
                  Brand guide
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Build;
