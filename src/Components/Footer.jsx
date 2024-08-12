import React from "react";
import "../Assects/css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_box">
          <div className="footer_row">
            <div className="footer_main">
              <div className="footer_section">
                <div className="footer_section_title1">Create your logo</div>
                <p className="footer_section_note1">
                  Try Brandmark for free, no account needed
                </p>
              </div>
              <div className="footer_section">
                <div className="footer_section_title2">Support</div>
                <p className="footer_section_note2">
                  Have questions or need help? Start here.
                </p>
              </div>
              <div className="footer_section">
                <div className="footer_section_title3">Tools</div>
                <p className="footer_section_note3">
                  Check out our free tools for color, font and logo design
                </p>
              </div>
            </div>
            <div className="footer_section_list">
              <div className="footer_section_list_item">Terms of service</div>
              <div className="footer_section_list_item">Privacy policy</div>
            </div>
          </div>
        </div>
        <div className="footer__decor">
          <div className="footer_decor_item1"></div>
          <div className="footer_decor_item2"></div>
          <div className="footer_decor_item3"></div>
          <div className="footer_decor_item4"></div>
        </div>
      </div>
    </>
  );
};
export default Footer;
