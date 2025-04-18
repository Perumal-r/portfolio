import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import cardImgHtml from "../../images/htmlnewimage.webp";
import cardImgCss from "../../images/cssnew.png";
import cardImageJs from "../../images/newjs.jpg";
import cardImageReact from "../../images/reactnew.jpg";
import cardImageTailwind from "../../images/newtailwind.jpg";
import cardImageNext from "../../images/nextjs-cover-jpg-webp.webp";

export default function FlippyCard() {
  const aboutCardDetails = [
    {
      title: "Experince",
      name: "Html",
      experince: "1.5 year",
      company: "Tarnea Technologies and solutions",
      address:
        "Building, 3rd Floor, Excellence, TCE Avaniyapuram Rd, Thiruparankundram, Tamil Nadu 625015",
      url: cardImgHtml,
    },
    {
      title: "Experince",
      name: "Css",
      experince: "1.5 year",
      company: "Tarnea Technologies and solutions",
      address:
        "Building, 3rd Floor, Excellence, TCE Avaniyapuram Rd, Thiruparankundram, Tamil Nadu 625015",
      url: cardImgCss,
    },
    {
      title: "Experince",
      name: "Javascript",
      experince: "1.5 year",
      company: "Tarnea Technologies and solutions",
      address:
        "Building, 3rd Floor, Excellence, TCE Avaniyapuram Rd, Thiruparankundram, Tamil Nadu 625015",
      url: cardImageJs,
    },
    {
      title: "Experince",
      name: "React",
      experince: "1.5 year",
      company: "Tarnea Technologies and solutions",
      address:
        "Building, 3rd Floor, Excellence, TCE Avaniyapuram Rd, Thiruparankundram, Tamil Nadu 625015",
      url: cardImageReact,
    },
    {
      title: "Experince",
      name: "Next.js",
      experince: "7 months",
      company: "Tarnea Technologies and solutions",
      address:
        "Building, 3rd Floor, Excellence, TCE Avaniyapuram Rd, Thiruparankundram, Tamil Nadu 625015",
      url: cardImageNext,
    },
    {
      title: "Experince",
      name: "Tailwind",
      experince: "1.5 year",
      company: "Tarnea Technologies and solutions",
      address:
        "Building, 3rd Floor, Excellence, TCE Avaniyapuram Rd, Thiruparankundram, Tamil Nadu 625015",
      url: cardImageTailwind,
    },
  ];

  return (
    <>
      <div className="row d-flex justify-content-evenly my-5 mx-0">
        <div className="text-center text-white" data-aos="fade-down">
          <h3>My Experinces</h3>
        </div>
        {aboutCardDetails.map((items) => {
          return (
            <>
              <div
                className="col-lg-4 col-md-4 col-sm-12 p-5"
                data-aos="fade-down"
              >
                <Flippy
                  flipOnHover={true}
                  flipDirection="horizontal"
                  className="bg-white rounded"
                >
                  <FrontSide>
                    <div className="container">
                      <img
                        src={items.url}
                        alt="flip-image"
                        className="ms-2"
                        width="100%"
                        height="200vh"
                      />
                    </div>
                  </FrontSide>
                  <BackSide>
                    <div className="">
                      <h5>Language : {items.name}</h5>
                      {/* <h4>{items.title}</h4> */}
                      <h4>Experince : {items.experince}</h4>
                      <p>Company : {items.company}</p>
                      <p>Address : {items.address}</p>
                    </div>
                  </BackSide>
                </Flippy>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
