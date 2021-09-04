import styled from "styled-components";

export const Wrapper = styled.div`
  /* TYPO */

  .h4-text-box {
    font-family: "Cherry Cream Soda";
    color: deeppink;
    font-size: 25px;
    letter-spacing: 1px;
    margin: unset;
  }

  .p-box {
    width: 90%;
  }

  .p-text-box {
    font-family: "Cherry Cream Soda";
    letter-spacing: 0.5px;
    color: darkslategrey;

    /* CLAMP */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span.MuiChip-label {
    font-family: "Cherry Cream Soda";
    font-size: 14px;
    letter-spacing: 1px;
  }

  .h3-kids-advisor {
    font-family: "Cherry Cream Soda";
    color: mediumvioletred;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
  }

  /* ITEM */
  .card-box {
    display: flex;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%),
      0 1px 10px rgb(0 0 0 / 12%);
  }

  .text-box {
    width: 50%;
    padding: 2%;
    box-sizing: border-box;
  }
  .img-main-box {
    width: 50%;
    position: relative;
  }
  .img-box {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px #00000061);
  }

  .MuiChip-root {
    color: white;
    border: 1px solid deeppink;
    background: deeppink;
    margin-right: 3%;
    margin-top: 3%;
  }

  .rating-box {
    display: flex;
    align-items: center;
  }

  fieldset.MuiBox-root {
    margin: 0 0 0 3%;
    padding: unset;
  }

  .icon-rating-box {
    color: mediumvioletred;
  }

  .kids-advisor {
    border-top: 2px solid #c715854f;
    margin-top: 5%;
  }

  .chip-box {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: 5% 3% 15% 3%;
    width: 100%;
    background: #ffffff59;
  }

  .btn-read-more {
    display: flex;
    text-decoration: none;
  }

  .p-read-more {
    margin-left: 3%;
    font-family: "Cabin Sketch";
  }

  @media screen and (max-width: 770px) {
    .card-box {
      flex-direction: column;
    }

    .text-box {
      width: 100%;
      order: 2;
    }

    .img-main-box {
      width: 100%;
      
    }

    .img-box {
      width: 100%;
      object-fit: contain;
      order: 1;
    }

    .rating-box {
      justify-content: center;
    }

    .kids-advisor {
      margin-top: 3%;
    }
  }
`;
