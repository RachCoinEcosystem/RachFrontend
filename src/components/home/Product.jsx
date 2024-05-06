import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rachcoinEcosystemEarnings } from "../../constants";

const { title, subtitle, ITEMS } = rachcoinEcosystemEarnings;

const Product = () => {
  const renderItems = () => {
    return ITEMS.map((item) => (
      <div
        key={item.title}
        className="p-3 border-2 border-yellow-500 rounded-md shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-sm">{item.subtitle}</p>
        <img src={item.image} alt={item.title} className="mt-4 mx-auto" />
      </div>
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px", // Adjust the center padding to add space between items
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="container mx-auto mt-6 lg:mt-20 bg-[#070707] min-h-screen">
      <h4 className="text-sm sm:text-6xl lg:text-5xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {title}
        </span>
      </h4>
      <p className="text-secondary mb-5 md:mb-8 text-center">{subtitle}</p>
      <Slider {...settings}>{renderItems()}</Slider>
    </div>
  );
};

export default Product;
