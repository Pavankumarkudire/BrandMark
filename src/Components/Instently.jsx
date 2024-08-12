import React from "react";
import '../Assects/css/Instently.css'; 
import instentlyPic from "../Assects/Imags/settings.png"

const Instently = () => {
  return (
    <>
      <div className="instently">
        <div className="instently_box">
            <div className="instently__main">
                <div className="instently__title">Instantly customize and export</div>
                <div className="instently__note">Right in your browser, no designer or software needed</div>
            </div>
            <div className="instently_preview">
                <div className="instently_preview_box">
                    <img src={instentlyPic} alt="photo" />
                </div>
                <div className="instently_preview-note">
                    <div className="instently_preview-info instantly__preview-info--s1">
                        <div className="instently__preview-title">EXPORT TO ALL MAJOR FORMATES</div>
                        <div className="instently__preview-text">Including SVG, EPS, PNG and PDF</div>
                    </div>
                    <div className="instently_preview-info instently__preview-info--s2">
                        <div className="instently__preview-title">Easily Edit and Customize</div>
                        <div className="instently__preview-text">Double click to edit text</div>
                    </div>
                    <div className="instently_preview-info instently__preview-info--s3">
                        <div className="instently__preview-title">ADJUST TEXT AND IMAGE SIZE</div>
                        <div className="instently__preview-text">Perfetly sized for web and print</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Instently;

