import styled from "styled-components";
import sugar_candies from "../../sugar-candies.jpg";

export const Wrapper = styled.div`
  background-image: url(${sugar_candies});
  background-size: contain;
  filter: drop-shadow(2px 4px 6px black);
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;

  .title-box {
    background-color: #ffe4c4b5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3%;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%),
      0 1px 10px rgb(0 0 0 / 12%);
    width: fit-content;
    height: 40%;
    margin-bottom: 5%;
  }

  .text-box {
    /* border: 2px solid teal; */
  }

  h1 {
    font-family: "Indie Flower";
    color: hotpink;
    font-size: 35px;
    letter-spacing: 2px;
    text-align: center;

    margin: unset;
  }

  h3 {
    font-family: "Indie Flower";
    color: ghostwhite;
    font-size: 27px;
    letter-spacing: 1px;
    text-align: center;
  }
`;
