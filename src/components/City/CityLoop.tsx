import { Wrapper } from "./CityLoop.styles";
import React from "react";
import { Chip, Grid, Box, Fab } from "@material-ui/core";
import sofia_test from "../../sofia_test.jpg";
import kids_advisor from "../../kids_advisor.svg";
import { NatureOutlined } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const CityLoop = () => {
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">WONDERFUL ROME</h4>
              <div className="p-box">
                <p className="p-text-box">
                  sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                  Some Paragraph
                </p>
              </div>
              <Link to="/article/test" className="btn-read-more">
                {" "}
                <Fab size="small" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
                <p className="p-read-more">Read More...</p>
              </Link>

              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <img src={kids_advisor} alt="" />
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      getLabelText={(value: number) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="img-main-box">
              <img className="img-box" src={sofia_test} alt="" />
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">WONDERFUL ROME</h4>
              <div className="p-box">
                <p className="p-text-box">
                  sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                  Some Paragraph
                </p>
              </div>
              <Link to="/article/test" className="btn-read-more">
                {" "}
                <Fab size="small" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
                <p className="p-read-more">Read More...</p>
              </Link>

              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <img src={kids_advisor} alt="" />
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      getLabelText={(value: number) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="img-main-box">
              <img className="img-box" src={sofia_test} alt="" />
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">WONDERFUL ROME</h4>
              <div className="p-box">
                <p className="p-text-box">
                  sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                  Some Paragraph
                </p>
              </div>
              <Link to="/article/test" className="btn-read-more">
                {" "}
                <Fab size="small" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
                <p className="p-read-more">Read More...</p>
              </Link>

              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <img src={kids_advisor} alt="" />
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      getLabelText={(value: number) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="img-main-box">
              <img className="img-box" src={sofia_test} alt="" />
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">WONDERFUL ROME</h4>
              <div className="p-box">
                <p className="p-text-box">
                  sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                  Some Paragraph
                </p>
              </div>
              <Link to="/article/test" className="btn-read-more">
                {" "}
                <Fab size="small" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
                <p className="p-read-more">Read More...</p>
              </Link>

              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <img src={kids_advisor} alt="" />
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      getLabelText={(value: number) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="img-main-box">
              <img className="img-box" src={sofia_test} alt="" />
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CityLoop;
