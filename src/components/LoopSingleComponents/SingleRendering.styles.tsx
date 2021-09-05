import styled from "styled-components";
import rainbow from "../../blackboard-569260_640.jpg";

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

    // background-color: #e5e5f7;
    // opacity: 0.8;
    // background-image: linear-gradient(#444cf7 1px, transparent 1px),
    //   linear-gradient(to right, #444cf7 1px, #e5e5f7 1px);
    // background-size: 20px 20px;

    width: 80%;
    margin: 5% auto;
    display: flex;
    justify-content: center;
    padding: 1% 0;
  }
  .img-looped-block {
    max-width: fit-content;
    max-height: 50vh;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px black);
    transform: rotate(355deg);
  }

  .pin-board {
    height: 8%;
    width: 8%;
    position: relative;
    right: 6%;
    bottom: 6vh;
  }
`;
