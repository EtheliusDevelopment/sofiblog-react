import React, { useState, useEffect } from "react";

// PRISMIC

import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";
import * as prismicT from "@prismicio/types";
// END PRISMIC

import ShowCarousel from "../Utils/Carousel";
import { Wrapper } from "./SingleRendering.styles";
import sofia_test from "../../sofia_test.jpg";
import QueryPrismic from "../Utils/QueryPrismic";

// PRISMIC CONFIG
const apiEndpoint = "https://blog-sofia.prismic.io/api/v2";
const accessToken = ""; // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken });

// TYPESCRIPT

// TYPESCRIPT USESTATE
export interface IPrismicRes {
  category: string;
  post_title: [];
  post_subtitle: [];
  activities_rating: [];
  body_post: {
    image_paragraph: {
      alt: string;
      copyright: string;
      dimensions: {
        width: number;
        height: number;
      };
      url: string;
    };

    title_paragraph: {
      spans: [];
      text: string;
      type: string;
    }[];

    paragraph: {
      spans: [];
      text: string;
      type: string;
    }[];
  }[];
}

export interface IBodyPar {
  image_paragraph: {};
  title_paragraph: [];
  paragraph: [];
}

// ********

const SingleRendering = () => {
  const [doc, setDocData] = useState<IPrismicRes>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "sofipost")
      );
      if (response) {
        setDocData(response.results[0].data);
        console.log(response.results[0].data.body_post[0]);
      }
    };
    fetchData();
  }, []);

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

      
        {doc?.body_post.map((item, index) => (
          <div className="looped-block div-block">
            <h1 className="h1-title-block">{item.title_paragraph[0].text}</h1>
            <div className="img-looped-box">
              <img
                className="img-looped-block"
                src={item.image_paragraph.url}
                alt=""
              />
            </div>
            {
              item.paragraph.map((itemPar, index) => (
                <p className="p-par-block">{itemPar.text}</p>
              ))
            }
            
          </div>
        ))}
      

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
