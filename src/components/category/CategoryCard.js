import { Fragment } from "react";
import { Card, CardMedia, Typography, Stack } from "@mui/material";
import { MdWeb } from "react-icons/md";

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
          <MdWeb style={{ fontSize: "3rem", color: "#423a8a" }} />
          <Typography color="text.secondary" variant="h6" gutterBottom>
            Web Design
          </Typography>
        </Stack>
      </Card>
    </Fragment>
  );
}
