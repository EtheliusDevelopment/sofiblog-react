// MODULES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import TheCity from "./pages/TheCity";
import TheSea from "./pages/TheSea";
import TheMountain from "./pages/TheMountain";
import Moments from "./pages/Moments";
import Contacts from "./pages/Contacts";
import Video from "./pages/Video";

// ASSETS and STYLES

import "./App.css";

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-me" exact component={AboutMe} />
        <Route path="/sofia-and-the-city" exact component={TheCity} />
        <Route path="/sofia-and-the-sea" exact component={TheSea} />
        <Route path="/sofia-and-the-mountain" exact component={TheMountain} />
        <Route path="/video" exact component={Video} />
        <Route path="/moments" exact component={Moments} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;
