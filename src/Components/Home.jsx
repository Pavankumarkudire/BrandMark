import React from "react";
import Navbar from "./Navbar";
import "../Assects/css/style.css";
import "../Assects/css/Navbar.css";
import { Link } from "react-router-dom";
import Logos from "./Logos";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../Assects/Imags/Man_wearing_vr_glasses.png";
import Profile1 from "../Assects/Imags/Velantyna kuzmych.png";
import Build from "./Build";
import Chat from "./Chat";
import Instently from "./Instently";
import Footer from "./Footer";
import Creations from "./Creations";
import Features from "./Features";

const Home = () => {
  const slides = [
    {
      id: 1,
      name: "Velantyna kuzmych",
      Photo: Profile1,
      Company: "PubLaw project",
      customer: "Founder",
      description:
        "I.m not a designer, when i had a logo i found myself  starting at the blank screen. Brandmark make the process actullay enjoyable",
      image: SliderImg1,
    },
    {
      id: 2,
      name: "Velantyna kuzmych",
      Photo: Profile1,
      customer: "Founder",
      Company: "Noble Tide LLC",
      description:
        "I.m not a designer, when i had a logo i found myself  starting at the blank screen. Brandmark make the process actullay enjoyable",
      image: SliderImg1,
    },
    {
      id: 3,
      name: "Velantyna kuzmych",
      Photo: Profile1,
      Company: "Loctia",
      customer: "CEO",
      description:
        "I.m not a designer, when i had a logo i found myself  starting at the blank screen. Brandmark make the process actullay enjoyable",
      image: SliderImg1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="Container">
        <Navbar />
        <div className="main-content">
          <Link to="#" className="Hero-link">
            <span className="hero-link-note hero-link--b">BRAND</span>
            <span className="hero-link-note hero-link--m">MARK</span>
          </Link>
          <h2 className="hero-title">
            Create a unique, professional logo for your business
          </h2>
          <p className="hero-note">
            Kickstart your brand with business card designs, social media
            graphics, app icons, letter heads and more
          </p>
          <Link
            to=""
            target=""
            // rel="noopener noreferrer"
            className="logo-link"
          >
            <button>Create my logo</button>
          </Link>
        </div>
        <div className="slider">
          <SlickSlider {...settings}>
            {slides.map((slide) => (
              <div className="bm-slider" key={slide.id}>
                <div className="bm-slider-sidebar">
                  <div className="bm-slidbar-description">
                    <p>{slide.description}</p>
                    <div className="Slider-position">
                      <img src={Profile1} style={{ width: "40px" }} />
                      <div>
                        <div>{slide.name}</div>
                        <div>
                          {" "}
                          {slide.customer}
                          {","} {""}
                          {slide.Company}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bm-slider-image">
                    <img src={slide.image} alt={slide.name} />
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <Logos />
        <Build />
        <Chat />
        <Instently />
        <Creations />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Home;
