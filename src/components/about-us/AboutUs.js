import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";

export default function AboutUs() {
  return (
    <Fragment>
      <Box sx={{ pt: "4rem", pb: "4rem" }}>
        <Container maxWidth="xl">
          <Grid container spacing="3rem">
            <Grid item sm={12} md={4}>
              <CardMedia
                component="img"
                src={require("../../static/images/course_langding_about.jpg")}
                sx={{ borderRadius: "10%" }}
              />
            </Grid>
            <Grid item sm={12} md={8}>
              <Typography variant="h3" gutterBottom>
                Phasellus gravida semper nisi. Vestibulum rutrum
              </Typography>
              <Typography variant="p" component="p">
                Curabitur a felis in nunc fringilla tristique. Fusce egestas
                elit eget lorem. Etiam vitae tortor. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                hymenaeos.
              </Typography>
              <Stack direction="row"></Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
