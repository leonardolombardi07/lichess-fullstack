import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface PageProps {
  params: {
    playerUsername: string;
  };
}

export default async function Page({ params }: PageProps) {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <WorkInProgress />
    </Box>
  );
}

function WorkInProgress() {
  return (
    <Alert severity="info">
      <AlertTitle>Work in progress</AlertTitle>
      This page is still under construction. Please check back later.
    </Alert>
  );
}
