import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import SyncSlider from "./SyncSlider";

export default function Reviews() {
  return (
    <Fragment>
      <Box sx={{ pt: 8, pb: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center">
            What Our Customer Say
          </Typography>
          <SyncSlider />
        </Container>
      </Box>
    </Fragment>
  );
}
