import { Wrapper } from "./NavBar.styles";
import Navigation from "./Navigation"

const NavBar = () => {
  return (
    <Wrapper>
      <div className="title-box">
        <div className="text-box">
          <h1>Sofia's Diary .</h1>
          <h3>"[ Living - Doing - Learning - Sharing ]"</h3>
        </div>
      </div>
      <Navigation />
    </Wrapper>
  );
};

export default NavBar;
