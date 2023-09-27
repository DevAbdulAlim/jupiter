import { Diversity2TwoTone } from "@mui/icons-material";
import { Avatar, Card, Grid, Stack, Typography, Paper } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Fragment, useState } from "react";
import Slider from "react-slick";

export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <Fragment>
      <Slider
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide={true}
        infinite={true}
        autoplay={true}
        autoplaySpeed={10000}
        speed={2000}
        focusOnSelect={true}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
      >
        {[...Array(6)].map((_, index) => (
          <Paper elevation={0} sx={{ p: "3rem 1rem 3rem 1rem" }}>
            <Typography
              sx={{ cursor: "grab" }}
              color="text.secondary"
              variant="p"
              component="p"
              align="center"
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type when an unknown printer took a galley of type
              and scrambled it to make a type
            </Typography>
          </Paper>
        ))}
      </Slider>
      <div style={{ maxWidth: "10rem", margin: "auto" }}>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={1}
          arrows={false}
          slidesToScroll={1}
          swipeToSlide={true}
          centerMode={true}
          focusOnSelect={true}
          infinite={true}
          autoplay={true}
          autoplaySpeed={10000}
          speed={2000}
        >
          {["A", "B", "C", "D", "E", "F"].map((item, index) => (
            <Paper elevation={0} sx={{ pt: "3rem", pb: "3rem" }}>
              <Avatar
                sx={{
                  cursor: "pointer",
                  margin: "auto",
                  backgroundColor: "#423a8a",
                }}
              >
                {item}
              </Avatar>
            </Paper>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
}
