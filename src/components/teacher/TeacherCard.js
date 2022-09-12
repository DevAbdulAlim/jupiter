import { Card, CardMedia, Stack, Typography } from "@mui/material";
export default function TeacherCard() {
  return (
    <Card
      sx={{
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      }}
    >
      <Stack
        pt="1rem"
        pb="1rem"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Jayvion Simon
        </Typography>
        <Typography variant="p" align="center" gutterBottom>
          Full Stack Developer
        </Typography>
      </Stack>

      <CardMedia
        height="270px"
        component="img"
        image={require("../../static/images/teacher.png")}
        sx={{ clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)" }}
      ></CardMedia>
    </Card>
  );
}
