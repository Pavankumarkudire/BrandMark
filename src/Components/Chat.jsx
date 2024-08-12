import React from "react";
import "../Assects/css/Chat.css";
import Apple from "../Assects/Imags/Apple_Shape.png";
import ChatPrfile from "../Assects/Imags/Man_profile.png";
import ProfileApple from "../Assects/Imags/ProfileApple.png";
import ApplePic from "../Assects/Imags/Thirty Logos.jpeg";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="chat-box">
          <div className="chat-main">
            <div className="chat-main-title">
              <div className="chat-main-title-list">The only logo maker with free customization</div>
              <div className="chat-main-list">
                We’ll personally help you customize your logo with the purchase
                of any package.
              </div>
            </div>
          </div>
          <div className="chat-phone">
            <img src={Apple} alt="apple" className="Apple" />
            <div className="Chat-list">
              <div className="Chat-list-profile">
                <img
                  src={ChatPrfile}
                  alt="profile"
                  className="Chat-list-profile-pic"
                />
                <div className="Chat-list-profile-text">
                  Can you put the icon on a hexagonal container, change the text
                  to green, and also remove the tagline
                </div>
                <img
                  src={ProfileApple}
                  alt="profile"
                  className="Chat-list-profile-pic2"
                />
                <div className="Chat-list-profile-item-note">
                  <img
                    src={ApplePic}
                    alt=""
                    className="Chat-list-profile-Picture"
                  />
                  <p className="Chat-list-profile-item-note-list">
                    Sure thing, how does this look?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
