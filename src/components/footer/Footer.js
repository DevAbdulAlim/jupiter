import { Stack, Box, Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#00968808", pt: 8, pb: 8 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          {["Home", "About", "Courses", "Carrer", "Faq", "Contact"].map(
            (item, index) => (
              <Link underline="none" to={"/" + item} component={RouterLink}>
                {item}
              </Link>
            )
          )}
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
}
