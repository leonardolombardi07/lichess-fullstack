import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OnlinePlayers from "./_page/OnlinePlayers";
import Leaderboards from "./_page/Leaderboards";
import Paper from "@mui/material/Paper";

export default function Page() {
  return (
    <Box
      sx={{
        pr: {
          xs: 0,
          lg: 2,
        },
      }}
    >
      <Grid
        component={Paper}
        container
        spacing={2}
        sx={{
          px: {
            xs: 1,
            lg: 8,
          },
          py: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          order={{
            xs: 2,
            sm: 1,
          }}
        >
          <OnlinePlayers />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          order={{
            xs: 1,
            sm: 2,
          }}
        >
          <Leaderboards />
        </Grid>
      </Grid>
    </Box>
  );
}
