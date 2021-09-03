import { Link } from "react-router-dom";

import { Wrapper } from "./NavBar.styles";
import Navigation from "./Navigation";

import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="title-box">
        <div className="text-box">
          <h1>Sofia's Diary .</h1>
          <h3>"[ Living - Doing - Learning - Sharing ]"</h3>
        </div>
        <div className="social-box">
          <YouTubeIcon onClick={() => window.open("https://youtube.com", "_blank")} />
          <InstagramIcon onClick={() => window.open("https://instagram.com", "_blank")}/>
        </div>
      </div>
      <Navigation />
    </Wrapper>
  );
};

export default NavBar;
