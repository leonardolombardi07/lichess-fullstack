import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OnlinePlayers, { OnlinePlayersSkeleton } from "./_page/OnlinePlayers";
import Leaderboards, { LeaderboardsSkeleton } from "./_page/Leaderboards";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";

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
          <Box>
            <Typography variant="h6">Leaderboard Online Players</Typography>
            <Suspense fallback={<OnlinePlayersSkeleton />}>
              <OnlinePlayers />
            </Suspense>
          </Box>
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
          <Suspense fallback={<LeaderboardsSkeleton />}>
            <Leaderboards />
          </Suspense>
        </Grid>
      </Grid>
    </Box>
  );
}
