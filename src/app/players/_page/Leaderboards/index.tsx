import LichessApi, {
  ValidLeaderboardPerfType,
  humanReadablePerfType,
} from "@/modules/lichess-api";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { PerfTypeIcon } from "@/components/icons";
import PlayerCard, {
  PlayerCardSkeleton,
} from "@/components/modules/players/PlayerCard";
import { Suspense } from "react";

export default async function Leaderboards() {
  const allTop10 = await LichessApi.getTop10PlayersFromAllLeaderboards();

  const allTop10AsArray = Object.entries(allTop10).map(
    ([perfType, players]) => ({
      perfType: perfType as ValidLeaderboardPerfType,
      players,
    })
  );

  return (
    <Suspense fallback={<ListOfSkeletonItems />}>
      <Grid container spacing={0}>
        {allTop10AsArray.map((leaderboard) => (
          <Grid item xs={12} sm={6} md={4} key={leaderboard.perfType}>
            <Box
              sx={{
                borderRight: "1px solid",
                borderLeft: "1px solid",
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                component={Link}
                href={`/players/top/200/${leaderboard.perfType}`}
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  display: "flex",
                  alignItems: "center",
                  p: 1,

                  // Disable default anchor styles
                  textDecoration: "none",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <PerfTypeIcon perfType={leaderboard.perfType} />
                <Typography
                  variant="h6"
                  sx={{
                    ml: 1,
                  }}
                >
                  {humanReadablePerfType(leaderboard.perfType)}
                </Typography>
              </Box>

              {leaderboard.players.map((player) => (
                <PlayerCard key={player.username} {...player} />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Suspense>
  );
}

function ListOfSkeletonItems() {
  return (
    <Grid container spacing={0}>
      {Array.from({ length: 15 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <LeaderboardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}

function LeaderboardSkeleton() {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          height: 48,
        }}
      />

      {Array.from({ length: 10 }).map((_, index) => (
        <PlayerCardSkeleton key={index} />
      ))}
    </Box>
  );
}
