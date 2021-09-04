import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Badge } from "@material-ui/core";
import right_arrow from "../../right_arrow.svg";
import left_arrow from "../../left_arrow.svg";
import { Wrapper } from "./Carousel.styles";
import sofia_test from "../../sofia_test.jpg";
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';

function ShowCarousel() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Wrapper>
      <Carousel
        className="box-carousel"
        autoPlay={false}
        fullHeightHover={false}
        navButtonsAlwaysVisible
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
        <Item />
    </Wrapper>
  );
}

function Item(props: any) {
  return (
    <>
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button> */}
      <div className="badge-box">
        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
            <ShutterSpeedIcon />
          </Badge>
          <p className="p-badge">Kids Activities</p>
        </div>

        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
              <ShutterSpeedIcon />
          </Badge>
          <p className="p-badge">Public Parks</p>
        </div>

        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
            <ShutterSpeedIcon />
          </Badge>
          <p className="p-badge">Kids Food</p>
        </div>
        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
            <ShutterSpeedIcon />
          </Badge>
          <p className="p-badge">Public Transports</p>
        </div>
        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
            <ShutterSpeedIcon />
          </Badge>
          <p className="p-badge">English Speakers</p>
        </div>
        
      </div>
    </>
  );
}

export default ShowCarousel;
