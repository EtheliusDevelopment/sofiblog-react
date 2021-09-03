import { Wrapper } from "./CityLoop.styles";
import React from "react";
import { Chip, Grid, Box, Typography } from "@material-ui/core";
import sofia_test from "../../sofia_test.jpg";
import { NatureOutlined } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";

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
              <h4 className="h4-text-box">SOME TITLE</h4>
              <p className="p-text-box">
                sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                Some Paragraph{" "}
              </p>
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <NatureOutlined className="icon-rating-box" />
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
            <img className="img-box" src={sofia_test} alt="" />
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">SOME TITLE</h4>
              <p className="p-text-box">
                sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                Some Paragraph{" "}
              </p>
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <NatureOutlined className="icon-rating-box" />
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
            <img className="img-box" src={sofia_test} alt="" />
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">SOME TITLE</h4>
              <p className="p-text-box">
                sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                Some Paragraph{" "}
              </p>
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <NatureOutlined className="icon-rating-box" />
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
            <img className="img-box" src={sofia_test} alt="" />
          </div>
        </Grid>

        <Grid item md={6}>
          <div className="card-box">
            <div className="text-box">
              <h4 className="h4-text-box">SOME TITLE</h4>
              <p className="p-text-box">
                sSome Paragraph Some Paragraph Some Paragraph Some Paragraph
                Some Paragraph{" "}
              </p>
              <div className="chip-box">
                <Chip variant="outlined" size="small" label="Rome" />
                <Chip variant="outlined" size="small" label="WowCities" />
                <Chip variant="outlined" size="small" label="Art" />
              </div>
              <div className="kids-advisor">
                <h3 className="h3-kids-advisor">Kid's Advisor</h3>
                <div className="rating-box">
                  <NatureOutlined className="icon-rating-box" />
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
            <img className="img-box" src={sofia_test} alt="" />
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CityLoop;
