import { Fragment } from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <Fragment>
      <Box sx={{ pt: 8, pb: 8 }}>
        <Container maxWidth="xl">
          <Grid
            container
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            }}
            spacing="2rem"
          >
            <Grid item sm={12} md={6}>
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                variant="h2"
                gutterBottom
              >
                Free Online Courses From The Experts
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                variant="p"
                component="p"
                gutterBottom
              >
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </Typography>

              <Stack
                sx={{ mt: 8, mb: 8 }}
                direction="row"
                alignItems="center"
                spacing="1rem"
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button sx={{ backgroundColor: "#423a8a" }} variant="contained">
                  Ready Start{" "}
                </Button>
                <Button sx={{ color: "#423a8a" }} variant="outlined">
                  Watch Video
                </Button>
              </Stack>

              <Divider />
              <Stack
                sx={{ mt: 8, mb: 8 }}
                direction="row"
                alignItems="center"
                justifyContent={{ xs: "center", md: "left" }}
                spacing="1rem"
              >
                <Paper elevation={0}>
                  <Typography variant="h6">14K+</Typography>
                  <Typography variant="p">Learners</Typography>
                </Paper>
                <Paper elevation={0}>
                  <Typography variant="h6">1.04K+</Typography>
                  <Typography variant="p">Courses</Typography>
                </Paper>

                <Paper elevation={0}>
                  <Typography variant="h6">59K+</Typography>
                  <Typography variant="p">Graduates</Typography>
                </Paper>
              </Stack>
            </Grid>
            <Grid item sm={12} md={6}>
              <CardMedia
                component="img"
                src={require("../../static/images/hero.png")}
                alt="IT Training"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
