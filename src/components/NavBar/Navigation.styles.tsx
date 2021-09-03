import styled from "styled-components";

export const Wrapper = styled.div`

    width: 90%;

  .MuiBottomNavigation-root {
    background-color: #3f51b57d;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%), 0 1px 10px rgb(0 0 0 / 12%);
  }

  .MuiButtonBase-root {
    color: teal;
  }

  .MuiBottomNavigationAction-root {
    max-width: unset;
    min-width: unset;
    margin-right: 2%;
  }

  .MuiBottomNavigationAction-label {
    color: white;
    font-family: "Indie Flower";
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 600;
    transition: all .1s ease-in;
  }

  svg.MuiSvgIcon-root {
    color: darkorange;
    width: 2.5rem;
    height: 2.5rem;
    transition: all .1s ease-in;
  }

  .Mui-selected svg.MuiSvgIcon-root {
    color: white;
    transform: scale(1.1);
  }

  span.Mui-selected {
    font-size: 21px;
    color: bisque; !important;
    transform: scale(1.1);
  }
`;
