"use client";
// @ts-ignore
import Slider from "react-slick";
import Image from "next/image";

function SliderRecommendation() {
  const settings = {
    centerPadding: "20px",
    centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="slider-container w-[23rem] mb-0">
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
    </>
  );
}

export default SliderRecommendation;
