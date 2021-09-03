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
    letter-spacing: .5px;
    color: darkslategrey;
  }
  /* ITEM */
  .card-box {
    display: flex;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%), 0 1px 10px rgb(0 0 0 / 12%);
  }

  .text-box {
    width: 50%;
  }

  .img-box {
    width: 50%;
    object-fit: contain;
    /* filter: drop-shadow(2px 4px 6px rgb(0 0 0 / 50%)); */
  }

  .MuiChip-root {
    color: deeppink;
    border: 1px solid deeppink;
}
`;
