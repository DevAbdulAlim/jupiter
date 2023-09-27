import { Fragment } from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import client from "../../static/images/client.png";

export default function Client() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Fragment>
      <Box sx={{ pb: 8 }}>
        <Container maxWidth="xl">
          <Typography align="center" variant="h3" gutterBottom>
            We Work With
          </Typography>
          <Typography
            color="text.secondary"
            align="center"
            variant="p"
            component="p"
            gutterBottom
          >
            Quisque aliquet, libero consequat elementum convallis.
          </Typography>

          <Slider {...settings}>
            {[...Array(20)].map((_, index) => (
              <Paper elevation={0} key={index}>
                <img src={client} height="80px" width="100%" alt="flower" />
              </Paper>
            ))}
          </Slider>
        </Container>
      </Box>
    </Fragment>
  );
}
