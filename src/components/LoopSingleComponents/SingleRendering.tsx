import React from "react";
import ShowCarousel from "../Utils/Carousel";
import { Wrapper } from "./SingleRendering.styles";
import sofia_test from "../../sofia_test.jpg";

const SingleRendering = () => {
  return (
    <Wrapper>
      <div className="first-block div-block">
        <h1 className="h1-title-block">Roadmap</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="carousel-block">
        <ShowCarousel />
      </div>

      <div className="looped-block div-block">
        <h1 className="h1-title-block">Paragraph</h1>
        <div className="img-looped-box">
          <img className="img-looped-block" src={sofia_test} alt="" />
        </div>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="looped-block div-block">
        <h1 className="h1-title-block">Paragraph</h1>
        <div className="img-looped-box">
          <img className="img-looped-block" src={sofia_test} alt="" />
        </div>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="looped-block div-block">
        <h1 className="h1-title-block">Paragraph</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="looped-block div-block">
        <h1 className="h1-title-block">Paragraph</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="looped-block div-block">
        <h1 className="h1-title-block">Paragraph</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>

      <div className="looped-block div-block">
        <h1 className="h1-title-block">Paragraph</h1>
        <p className="p-par-block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          harum, expedita magnam amet reprehenderit cum id modi sunt tempore
          nisi distinctio adipisci laboriosam iste exercitationem fugiat alias
          doloremque cupiditate quidem?
        </p>
      </div>
    </Wrapper>
  );
};

export default SingleRendering;
