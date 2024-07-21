import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";

export default function PageLoader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
