import styled from "styled-components";

export const Wrapper = styled.div`
  // TYPO
  .p-badge {
    // margin: 0 8% 0 0;
    font-family: "Sen";
    font-size: 15px;
    color: darkorchid;
    letter-spacing: 1px;
  }

  .img_arrow {
    width: 3rem;
  }

  .img-carousel {
    width: 100%;
    object-fit: cover;
  }

  .box-carousel {
    height: 10vh;
    width: 100%;
    background: white;
    margin: auto;
  }

  .badge-box {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 0 0 2% 0;
    flex-wrap: wrap;
  }

  .MuiBadge-root {
    margin-right: 2%;
    color: chartreuse;
  }

  .badge-item {
    display: flex;
    width: 15%;
  }

  .MuiBadge-colorPrimary {
    color: white;
    background-color: deeppink;
    width: 35px;
    height: 35px;
    font-size: 20px;
    font-family: "Cherry Cream Soda";
  }

  .MuiBadge-root .MuiSvgIcon-root {
    width: 2em;
    height: 2em;
  }
`;
