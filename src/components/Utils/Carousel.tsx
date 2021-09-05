import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Badge } from "@material-ui/core";
import right_arrow from "../../right_arrow.svg";
import left_arrow from "../../left_arrow.svg";
import { Wrapper } from "./Carousel.styles";
import sofia_test from "../../sofia_test.jpg";
import ShutterSpeedIcon from "@material-ui/icons/ShutterSpeed";

interface IpropsBadge {
  carouselText?: string;
  activities?: {
    rating: string;
    rateble: {
      spans: [];
      text: string;
      type: string;
    }[];
  }[];
}

function ShowCarousel({ carouselText, activities }: IpropsBadge) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  console.log("activities");

  return (
    <Wrapper>
      <Carousel
        className="box-carousel"
        autoPlay
        interval={8000}
        fullHeightHover={false}
        indicators={false}
        navButtonsAlwaysInvisible
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        {items.map((item, i) => (
          <>
            <img className="img-carousel" src={sofia_test} alt="" />
          </>
        ))}
      </Carousel>
      <div className="badge-box">
        {activities?.map((item, index) => (
          <div className="badge-item">
            <Badge badgeContent={item.rating} color="primary">
              <ShutterSpeedIcon />
            </Badge>
            <p className="p-badge">{item.rateble[0].text}</p>
          </div>
        ))}
      </div>
      <h4 className="h4-carousel-textbar">{carouselText}</h4>
    </Wrapper>
  );
}



export default ShowCarousel;
