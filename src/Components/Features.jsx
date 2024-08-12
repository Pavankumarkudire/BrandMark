import React from "react";
import "../Assects/css/Features.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaRegCircleXmark } from "react-icons/fa6";


const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features_box">
          <div className="features_list">
            <div className="features_item features_item--s1">
              <div className="features_item-cover">
              <FaRegCircleXmark className="featuresImg1"/>
              </div>
              <div className="features_item-box">
                <div className="features_item-title">
                  No more designer anixiety
                </div>
                <div className="features_item-note">
                  Get your logo instantly, not in weeks
                </div>
              </div>
            </div>
            <div className="features_item features_item--s2">
              <div className="features_item-cover">
                <div>
                <FontAwesomeIcon icon="fa-regular fa-message" className="featuresImg2"/>
                  {/* <img src={FeatureImg2} alt="" className="featuresImg2" /> */}
                </div>
              </div>
              <div className="features_item-box">
                <div className="features_item-title">
                  No more designer anixiety
                </div>
                <div className="features_item-note">
                  Get your logo instantly, not in weeks
                </div>
              </div>
            </div>
            <div className="features_item features_item--s3">
              <div className="features_item-cover">
              <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="featuresImg3"/>
                {/* <img src={FeatureImg3} alt="" className="featuresImg3" /> */}
              </div>
              <div className="features_item-box">
                <div className="features_item-title">
                  No more designer anixiety
                </div>
                <div className="features_item-note">
                  Get your logo instantly, not in weeks
                </div>
              </div>
            </div>
            <div className="features_item features_item--s4">
              <div className="features_item-cover">
              <FontAwesomeIcon icon="fa-thin fa-database" />
              <AiOutlineCopyrightCircle className="featuresImg4"/>

                {/* <img src={FeatureImg4} alt="" className="featuresImg4"/> */}
              </div>
              <div className="features_item-box">
                <div className="features_item-title">
                  No more designer anixiety
                </div>
                <div className="features_item-note">
                  Get your logo instantly, not in weeks
                </div>
              </div>
            </div>
            <div className="features_item features_item--s5">
              <div className="features_item-cover">
              <FontAwesomeIcon icon="fa-solid fa-infinity" className="featuresImg5"/>
              </div>
              <div className="features_item-box">
                <div className="features_item-title">
                  No more designer anixiety
                </div>
                <div className="features_item-note">
                  Get your logo instantly, not in weeks
                </div>
              </div>
            </div>
          </div>
          <div className="features_action">
            <div className="features_action-title">
              Create your unique logo design
            </div>
            <div className="features_action-note">
              generate unlimited logos for free
            </div>
            <Link
            to=""
            target=""
            // rel="noopener noreferrer"
            className="logo-link"
          >
            <button>Create my logo</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
