import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { Fragment } from "react";
import TeacherCard from "./TeacherCard";

export default function Teachers() {
  return (
    <Fragment>
      <Box sx={{ mt: 10, mb: 10 }}>
        <Container maxWidth="xl">
          <Typography variant="h4" align="center" gutterBottom>
            Meet Our Teachers
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </Typography>
          <Grid container spacing={4}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <TeacherCard />
              </Grid>
            ))}
          </Grid>
          <Stack sx={{ mt: 5, mb: 5 }} direction="row" justifyContent="center">
            <Button variant="outlined">Views All Teachers</Button>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
