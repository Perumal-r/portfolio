import React from "react";
import devImage from "../../images/devImage-removebg-preview.png";
// import MyImg from "../../images/ImageSet.png"
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Carousel() {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 text-secondary align-content-around "
          data-aos="fade-right"
        >
          <h1
            className="ms-5"
            style={{
              fontFamily: "Arial",
              fontSize: "2rem",
              fontWeight: "600",
              background: " #2B386C",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            I am Perumal
          </h1>
          <h3
            className="ms-5"
            style={{
              fontFamily: "Arial",
              fontSize: "2rem",
              fontWeight: "600",
              background:
                "linear-gradient(90deg,rgb(76, 84, 175), #2196F3, #2B386C)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Frontend Developer
          </h3>
          <h3 className="ms-5 text-black ">
            Experienced front-end developer specializing in crafting engaging
            and user-friendly web experiences. Proficient in HTML, CSS,
            JavaScript, and various frameworks like React and Next.js.
            Passionate about delivering high-quality, responsive designs
          </h3>
          <div className="d-flex justify-content-center mt-5">
            <button className="btn mt-1 shadow cursor-pointer">
              <Link to="/about" className="text-white text-decoration-none">
                About Me
                <span>
                  <TbPlayerTrackNextFilled className="blink ms-2" />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 mt-1 mb-5"
          data-aos="fade-left"
        >
          <img src={devImage} alt="" width={"100%"} />
        </div>
      </div>
    </>
  );
}
