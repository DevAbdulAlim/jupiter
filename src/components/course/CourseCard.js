import { Card, Grid, Paper } from "@mui/material";
import React, { Fragment } from "react";
import Slider from "react-slick";

export default function CourseCard() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Slider {...settings}>
        {[...Array(15)].map((_, index) => (
          <Grid sx={{ padding: "1.3rem" }} item>
            <Card sx={{ height: 400, widht: 400 }}>about</Card>
          </Grid>
        ))}
      </Slider>
    </Fragment>
  );
}
