import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import laptop from "../../images/laptop.webp";
import MyImg from "../../images/ImageSet.png";
import "./home.css";
import Card from "./card";
import Carousel from "./carousel";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Progress from "./progressBar";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home(props) {
  console.log(props);
  const handleWindowUp = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    document.title = props.title;

    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div className="homeBody">
        <div>
          <Carousel />
        </div>
        <div>
          <Card />
        </div>
        {/* <div
          className="container p-5 mt-5 shadow"
          style={{ borderRadius: "10px" }}
        >
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-12 d-block align-content-center my-4"
              data-aos="fade-right"
            >
              <div className="mx-5">
                <h3 className="text-center">Hii, I AM</h3>
                <h1 className="text-center">
                  <span style={{ color: "#2B386C" }}>PERUMAL R</span>
                </h1>
                <p className="text-center">
                  an interactive
                  <span className="fs-4 ms-2 text-danger">
                    web developer
                  </span>{" "}
                </p>
               
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
              data-aos="fade-left"
            >
              <img src={laptop} alt="laptop" className="homeLaptopImg" />
            </div>
          </div>
        </div> */}
        <div>
          <Progress />
        </div>
        <div className="arrow bounce">
          <MdOutlineKeyboardDoubleArrowUp
            className="fs-1"
            onClick={handleWindowUp}
          />
        </div>
      </div>
    </>
  );
}
