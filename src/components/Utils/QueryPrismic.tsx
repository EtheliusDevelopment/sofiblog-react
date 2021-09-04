import React, { useState } from "react";
import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";

const apiEndpoint = "https://blog-sofia.prismic.io/api/v2";
const accessToken = ""; // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken });

const QueryPrismic = () => {
  const [doc, setDocData] = useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "sofipost")
      );
      if (response) {
        setDocData(response.results[0]);
        console.log(response.results[0].data)
      }
    };
    fetchData();
  }, []);

  return (
  <div>
      <h1>QueryPrismic</h1>
  </div>
  );
};

export default QueryPrismic;
