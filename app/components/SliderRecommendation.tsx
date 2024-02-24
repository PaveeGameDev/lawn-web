"use client";
// @ts-ignore
import Slider from "react-slick";
import Image from "next/image";

function SliderRecommendation() {
  const settings = {
    centerPadding: "20px",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-1">
          <Image
            src="/lawnMover.jpg"
            alt="Logo"
            width={500}
            height={400}
            className=""
          />
        </div>
        <div className="px-1">
          <Image
            src="/lawnMover.jpg"
            alt="Logo"
            width={500}
            height={400}
            className=""
          />
        </div>
        <div className="px-1">
          <Image
            src="/lawnMover.jpg"
            alt="Logo"
            width={500}
            height={400}
            className=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderRecommendation;
