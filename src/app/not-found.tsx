import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: 1,
        }}
      >
        <Typography variant="h4">Not found</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body1">This page could not by found.</Typography>
      </Box>

      <Box sx={{ maxWidth: 500, my: 2 }}>
        <Button variant="outlined" LinkComponent={Link} href="/">
          Go Home
        </Button>
      </Box>
    </Box>
  );
}
