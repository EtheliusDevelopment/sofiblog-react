import { Wrapper } from "./CityLoop.styles";
import React from "react";
import { Chip, Grid } from "@material-ui/core";
import sofia_test from "../../sofia_test.jpg";
import { NatureOutlined, NaturePeople } from "@material-ui/icons";

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
              <Chip variant="outlined" size="small" label="Rome"/>
              <Chip variant="outlined" size="small" label="WowCities"/>
              <Chip variant="outlined" size="small" label="Art"/>
              </div>
              <div className="kids-advisor">
                  <h3>Kid's Advisor</h3>
                  <NatureOutlined />
                  <NaturePeople />
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
            </div>
            <img className="img-box" src={sofia_test} alt="" />
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CityLoop;
