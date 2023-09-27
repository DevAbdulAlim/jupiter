import { Fragment } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

export default function FeaturedCourses() {
  return (
    <Fragment>
      <Box sx={{ pt: 8, pb: 8 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{ textAlign: { xs: "center", md: "left" } }}
            variant="h4"
          >
            Featured Courses
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ textAlign: { xs: "center", md: "left" } }}
            variant="p"
            component="p"
          >
            Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet
            iaculis.
          </Typography>
          <CourseCard />
        </Container>
      </Box>
    </Fragment>
  );
}
