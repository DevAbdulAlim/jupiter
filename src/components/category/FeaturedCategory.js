import { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CategoryCard from "./CategoryCard";

export default function FeaturedCategory() {
  return (
    <Fragment>
      <Box sx={{ mt: 8, mb: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing="5rem">
            <Grid item sm={12} md={4}>
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                variant="h4"
                gutterBottom
              >
                Featured Category
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                variant="p"
                component="p"
                gutterBottom
              >
                Since wire-frame renderings are relatively simple and fast to
                calculate, they are often used in cases
              </Typography>
              <Stack
                direction="row"
                sx={{ justifyContent: { xs: "center", md: "left" } }}
              >
                <Button variant="contained">Explore More</Button>
              </Stack>
            </Grid>
            <Grid item sm={12} md={8}>
              <Grid container spacing={4}>
                {[...Array(9)].map((_, index) => (
                  <Grid key={index} item xs={6} md={4}>
                    <CategoryCard />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
