import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import Slider from "react-slick";

import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

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
            <Card
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;",
                borderRadius: "3%",
              }}
            >
              <CardMedia
                component="img"
                image={require("../../static/images/web-design1.webp")}
              />
              <CardContent>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary" variant="span">
                    Software
                  </Typography>
                </Stack>
                <Typography color="text.primary" variant="h6" gutterBottom>
                  Web Desing & Developement
                </Typography>
              </CardContent>
              <Stack p="1rem" direction="row" justifyContent="space-between">
                <Typography color="text.primary" variant="h5">
                  $400
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#423a8a",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "#201a59",
                    },
                  }}
                  variant="contained"
                >
                  See More
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Slider>
    </Fragment>
  );
}
