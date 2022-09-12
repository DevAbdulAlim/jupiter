import { Fragment } from "react";
import { Card, CardMedia, Typography, Stack } from "@mui/material";

import GraphicsIcon from "../../static/images/graphics-design.svg";

export default function CategoryCard() {
  return (
    <Fragment>
      <Card
        sx={{
          height: "120px",
          p: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;",
          borderRadius: "5%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          spacing="0.5rem"
          alignItems="center"
        >
          <img height="40px" width="40px" src={GraphicsIcon} alt="graphics" />
          <Typography variant="h6" gutterBottom>
            Web Design
          </Typography>
        </Stack>
      </Card>
    </Fragment>
  );
}
