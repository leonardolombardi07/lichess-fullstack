import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

export default function PageError({
  error = "Something went wrong. Please try again later.",
  reset,
}: {
  error?: Error | string;
  reset?: () => void;
}) {
  const formattedError = error instanceof Error ? error.message : error;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Alert
        severity="error"
        sx={{
          width: "100%",
        }}
      >
        <AlertTitle>Error</AlertTitle>
        {formattedError}

        {reset && (
          <Box
            sx={{
              maxWidth: 400,
              my: 2,
            }}
          >
            <Button variant="outlined" onClick={reset}>
              Reset
            </Button>
          </Box>
        )}
      </Alert>
    </Box>
  );
}
