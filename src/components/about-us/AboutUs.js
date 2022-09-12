import {
  Box,
  Card,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";

export default function AboutUs() {
  return (
    <Fragment>
      <Box sx={{ pt: "4rem", pb: "4rem" }}>
        <Container maxWidth="xl">
          <Grid container spacing="4rem">
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
              <Typography variant="p" component="p" gutterBottom>
                Curabitur a felis in nunc fringilla tristique. Fusce egestas
                elit eget lorem. Etiam vitae tortor. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                hymenaeos.
              </Typography>
              <Stack direction="row" pt="4rem" spacing="2rem">
                {[...Array(2)].map((item) => (
                  <Card
                    sx={{
                      p: "1.5rem",
                      height: "200px",
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    }}
                  >
                    <Typography>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis
                    </Typography>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
