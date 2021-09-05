import React, { useState, useEffect } from "react";

// PRISMIC

import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";
import * as prismicT from "@prismicio/types";
// END PRISMIC

import ShowCarousel from "../Utils/Carousel";
import { Wrapper } from "./SingleRendering.styles";
import sofia_test from "../../sofia_test.jpg";
import pinboard from "../../pin_boad.png";
import QueryPrismic from "../Utils/QueryPrismic";

// PRISMIC CONFIG
const apiEndpoint = "https://blog-sofia.prismic.io/api/v2";
const accessToken = ""; // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken });

// TYPESCRIPT

// TYPESCRIPT USESTATE
export interface IPrismicRes {
  category: string;
  title_review: {
    spans: [];
    text: string;
    type: string;
  }[];
  post_title: {
    spans: [];
    text: string;
    type: string;
  }[];
  post_subtitle: {
    spans: [];
    text: string;
    type: string;
  }[];
  activities_rating: {
    rating: string;
    rateble: {
      spans: [];
      text: string;
      type: string;
    }[];
  }[];
  body_post: {
    image_paragraph: {
      alt: string;
      copyright: string;
      dimensions: {
        width: string;
        height: string;
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
        console.log(response.results[0].data);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="first-block div-block">
        <h1 className="h1-title-block">{doc?.post_title[0].text}</h1>
        <p className="p-par-block">{doc?.post_subtitle[0].text}</p>
      </div>

      <div className="carousel-block">
        <ShowCarousel
          carouselText={doc?.title_review[0].text}
          activities={doc?.activities_rating}
        />
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
            <img src={pinboard} className="pin-board" alt="pin" />
          </div>
          {item.paragraph.map((itemPar, index) => (
            <p className="p-par-block">{itemPar.text}</p>
          ))}
        </div>
      ))}
    </Wrapper>
  );
};

export default SingleRendering;
