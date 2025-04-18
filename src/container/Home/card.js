import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardImgHtml from "../../images/htmlnewimage.webp";
import cardImgCss from "../../images/cssnew.png";
import cardImageJs from "../../images/newjs.jpg";
import cardImageReact from "../../images/reactnew.jpg";
import cardImageNextJs from "../../images/nextjs-cover-jpg-webp.webp";
import cardImageTailwind from "../../images/newtailwind.jpg";

export default function Card() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const cardImages = [
    //First image url
    {
      url: cardImgHtml,
    },
    {
      url: cardImgCss,
    },
    //Second image url
    {
      url: cardImageJs,
    },
    //Third image url
    {
      url: cardImageReact,
    },

    //Fourth image url

    {
      url: cardImageNextJs,
    },
    //Fifth image url

    {
      url: cardImageTailwind,
    },
  ];

  return (
    <>
      <div className="parent mt-5 mx-5" data-aos="fade-down">
        <h1 className="text-center text-black">Skills</h1>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {cardImages.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="movie" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
