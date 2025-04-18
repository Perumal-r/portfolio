import React, { useEffect, useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import medicalstore from "../../images/Media.jpg";
import portalimage from "../../images/image.jpg";
import anuragaviimage from "../../images/anuragavi.png";
import servicebanner from "../../images/servicebanner.png";
import { GiProgression } from "react-icons/gi";
import { BsPersonHeart } from "react-icons/bs";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { RiReservedFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cardContent = [
    {
      img: medicalstore,
      title: "Ecommerce",
      text: "Designing clean and intuitive interfaces using modern UI principles.",
      link: "http://medical-store.in",
    },
    {
      img: portalimage,
      title: "Portal",
      text: "This is intended for all medical store clients, to be used by their customers.",
      link: "http://portal.irevo.in",
    },
    {
      img: anuragaviimage,
      title: "CRM",
      text: "This is designed to make her job in the garments company easier and faster.",
      link: "https://adminanuragavigarments.vercel.app/",
    },
  ];

  useEffect(() => {
    const counters = document.querySelectorAll(".timer");

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-to");
        const speed = +counter.getAttribute("data-speed");
        const increment = target / (speed / 16);
        let count = 0;

        const animate = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(animate);
          } else {
            counter.textContent = target;
          }
        };

        animate();
      };

      updateCount();
    });
  }, []);

  const counters = [
    {
      icon: <GiProgression />,
      to: 10,
      speed: 7000,
      title: "Project Progress",
    },
    {
      icon: <BsPersonHeart />,
      to: 100,
      speed: 7000,
      title: "Happy Clients",
    },
    {
      icon: <CgArrowsExpandUpRight />,
      to: 5,
      speed: 7000,
      title: "Projects Completed",
    },
    {
      icon: <RiReservedFill />,
      to: 200,
      speed: 7000,
      title: "Clients Served",
    },
  ];

  useEffect(() => {
    document.title = props.title;
    Aos.init({ duration: 1200 });
  }, [props.title]);

  return (
    <>
      <div className="position-relative text-white">
        {/* <img
          src={servicebanner}
          alt="service banner"
          className="img-fluid w-100"
          style={{ height: "70vh", backgroundSize: "contain" }}
        /> */}

        {/* <div className="" style={{ width: "100%" }}>
          <div
            className=" position-absolute mt-3"
            style={{ top: "65%", left: "65%" }}
          >
            <button className="btn  bg-white">
              <Link to="/contact" className="text-decoration-none text-black">
                Contact Me
                <span>
                  <TbPlayerTrackNextFilled className="blink ms-2 text-black" />
                </span>
              </Link>
            </button>
          </div>
        </div> */}
      </div>

      <div className="aboutContainer">
        <section
          className="wow fadeIn animated"
          data-aos="fade-down"
          style={{ visibility: "visible", animationName: "fadeIn" }}
        >
          <div className="container">
            <div className="row">
              {counters.map((item, index) => (
                <div
                  key={index}
                  className="col-md-3 col-sm-6 text-white bottom-margin text-center counter-section wow fadeInUp animated"
                  data-wow-duration={`${(index + 1) * 300}ms`}
                  style={{
                    visibility: "visible",
                    animationDuration: `${(index + 1) * 300}ms`,
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="p-3" style={{ backgroundColor: "#012c54" }}>
                    <div className="medium-icon ">{item.icon}</div>
                    <span
                      className="timer counter alt-font appear text-white"
                      data-to={item.to}
                      data-speed={item.speed}
                    >
                      {item.to}
                    </span>
                    <p className="counter-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div
          className="p-5 my-1"
          style={
            {
              // backgroundColor: "#103051",
              // boxShadow: "0px 2px 16px 0px black",
            }
          }
        >
          <div className="row  justify-content-evenly" data-aos="fade-down">
            <h1 className="text-center text-black mb-5">My Projects</h1>
            {cardContent.map((card, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={index}
              >
                <div className="card h-100">
                  <img
                    src={card.img}
                    className="card-img-top"
                    alt={card.title}
                    style={{
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body ">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-primary"
                      style={{ textDecoration: "none" }}
                      onMouseOver={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.textDecoration = "none")
                      }
                    >
                      {card.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* accordion */}
        {/* <div
          className="accordion accordion-flush mx-5 my-5"
          id="accordionFlushExample"
        >
          {accordionData.map((item, index) => (
            <div className="accordion-item mt-3" key={index}>
              <h2 className="accordion-header" id={`flush-heading${index}`}>
                <button
                  className={`accordion-button ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  style={{ fontSize: "20px" }}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`flush-collapse${index}`}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body" style={{ fontSize: "20px" }}>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* accordion */}
        {/* <FlippyCard /> */}
      </div>
    </>
  );
}
