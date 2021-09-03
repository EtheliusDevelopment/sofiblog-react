import styled from "styled-components";

export const Wrapper = styled.div`
  /* TYPO */

  .h4-text-box {
    font-family: "Rampart One";
    color: darkorange;
    font-size: 30px;
    letter-spacing: 1px;
  }
  .p-text-box {
    font-family: "Cherry Cream Soda";
    letter-spacing: 0.5px;
    color: darkslategrey;
  }

  span.MuiChip-label {
    font-family: "Cherry Cream Soda";
    font-size: 14px;
    letter-spacing: 1px;
  }

  .h3-kids-advisor{
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
  }

  .img-box {
    width: 50%;
    object-fit: contain;
    /* filter: drop-shadow(2px 4px 6px rgb(0 0 0 / 50%)); */
  }

  .MuiChip-root {
    color: deeppink;
    border: 1px solid deeppink;
    margin-right: 3%;
  }

  .rating-box {
    display: flex;
    align-items: center;
  }

  fieldset.MuiBox-root {
    margin: 0 0 0 3%;
    padding: unset;
  }

  .icon-rating-box{
    color: mediumvioletred;
  }
  @media screen and (max-width: 770px) {
    
    
    .card-box {
      flex-direction: column;
    }

    .text-box {
      width: 100%;
      order: 2;
    }

    .img-box {
      width: 100%;
      object-fit: contain;
      order: 1;
    }

    .rating-box {
    justify-content: center;
  }


  }
`;
