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
          <Typography
            color="text.secondary"
            variant="p"
            component="p"
            align="center"
            gutterBottom
          >
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </Typography>
          <Grid mt="1rem" container spacing={4}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <TeacherCard />
              </Grid>
            ))}
          </Grid>
          <Stack sx={{ mt: 5, mb: 5 }} direction="row" justifyContent="center">
            <Button
              sx={{
                color: "#423a8a",
                border: "1px solid #423a8a",
                "&:hover": { border: "1px solid #423a8a" },
              }}
              variant="outlined"
            >
              Views All Teachers
            </Button>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
