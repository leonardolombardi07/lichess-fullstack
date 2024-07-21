import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OnlinePlayers from "./_page/OnlinePlayers";
import Leaderboards from "./_page/Leaderboards";
import Paper from "@mui/material/Paper";

export default function Page() {
  return (
    <Box
      sx={{
        pr: 2,
      }}
    >
      <Grid
        component={Paper}
        container
        spacing={2}
        sx={{
          px: 8,
          py: 4,
        }}
      >
        <Grid item xs={12} md={4}>
          <OnlinePlayers />
        </Grid>

        <Grid item xs={12} md={8}>
          <Leaderboards />
        </Grid>
      </Grid>
    </Box>
  );
}
