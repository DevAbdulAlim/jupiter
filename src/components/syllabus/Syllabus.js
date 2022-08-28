import React, { Fragment } from "react";
import {
  Card,
  CssBaseline,
  Grid,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Fullscreen } from "@mui/icons-material";

export default function Syllabus() {
  return (
    <Fragment>
      <CssBaseline>
        <h1>কোর্স কারিকুলাম</h1>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Card>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Paper sx={{ p: 5 }} elevation={0}>
                        Module 1
                      </Paper>
                    </Stack>

                    <Typography align="center" variant="h4">
                      React
                    </Typography>
                    <Typography>
                      React is a free and open-source front-end JavaScript
                      library for building user interfaces based on UI
                      components.
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                    }}
                  >
                    <ListItem>What is React?</ListItem>
                    <ListItem>What does React do?</ListItem>
                    <ListItem>Where can we use React?</ListItem>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ height: 350 }}>
              <Grid container>
                <Grid item>
                  <Typography>React</Typography>
                </Grid>
                <Grid item>
                  <ListItem>What is React?</ListItem>
                  <ListItem>What does React do?</ListItem>
                  <ListItem>Where can we use React?</ListItem>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </CssBaseline>
    </Fragment>
  );
}
