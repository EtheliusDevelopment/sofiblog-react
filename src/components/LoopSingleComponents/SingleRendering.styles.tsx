import styled from "styled-components";
import rainbow from "../../rainbow.svg";

export const Wrapper = styled.div`
  /* TYPO */

  .first-block .p-par-block {
    text-align: center;
    font-family: "Coming Soon";
    font-size: 25px;
    color: darkorchid;
    letter-spacing: 1px;
  }
  //  ********************

  .carousel-block {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 99;
  }

  .img-looped-box {
    background-image: url(${rainbow});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1% 0;
  }
  .img-looped-block {
    max-width: fit-content;
    max-height: 50vh;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px black);
  }
`;
