import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import HouseIcon from '@material-ui/icons/House';
import { Wrapper } from "./Navigation.styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="@Home"
          icon={<HouseIcon />}
          component={Link}
          to="/"
        />

        <BottomNavigationAction
          label="@AboutMe"
          icon={<FavoriteIcon />}
          component={Link}
          to="/about-me"
        />

        <BottomNavigationAction
          label="#CityLife"
          icon={<LocationCityIcon />}
          component={Link}
          to="/sofia-and-the-city"
        />

        <BottomNavigationAction
          label="#SeaLife"
          icon={<BeachAccessIcon />}
          component={Link}
          to="/sofia-and-the-sea"
        />

        <BottomNavigationAction
          label="#MountainLife"
          icon={<FilterHdrIcon />}
          component={Link}
          to="/sofia-and-the-mountain"
        />

        <BottomNavigationAction
          label="@Moments"
          icon={<LocationOnIcon />}
          component={Link}
          to="/moments"
        />

        <BottomNavigationAction
          label="@Videos"
          icon={<LocationOnIcon />}
          component={Link}
          to="/videos"
        />

        <BottomNavigationAction
          label="@Contacts"
          icon={<RestoreIcon />}
          component={Link}
          to="/contacts"
        />
      </BottomNavigation>
    </Wrapper>
  );
}
