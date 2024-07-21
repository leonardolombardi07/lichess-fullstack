import LichessApi, { ValidLeaderboardPerfType } from "@/modules/lichess-api";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { PerfTypeIcon } from "@/components/icons";
import PlayerCard from "@/components/modules/players/PlayerCard";

export default async function Leaderboards() {
  const allTop10 = await LichessApi.getTop10PlayersFromAllLeaderboards();

  const allTop10AsArray = Object.entries(allTop10).map(
    ([perfType, players]) => ({
      perfType: perfType as ValidLeaderboardPerfType,
      players,
    })
  );

  return (
    <Grid container spacing={0}>
      {allTop10AsArray.map((leaderboard) => (
        <Grid item xs={4} key={leaderboard.perfType}>
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
  );
}

function humanReadablePerfType(perfType: ValidLeaderboardPerfType) {
  switch (perfType) {
    case "blitz":
      return "Blitz";
    case "rapid":
      return "Rapid";
    case "bullet":
      return "Bullet";
    case "classical":
      return "Classical";
    case "chess960":
      return "Chess960";
    case "crazyhouse":
      return "Crazyhouse";
    case "antichess":
      return "Antichess";
    case "atomic":
      return "Atomic";
    case "horde":
      return "Horde";
    case "kingOfTheHill":
      return "King of the Hill";
    case "racingKings":
      return "Racing Kings";
    case "threeCheck":
      return "Three Check";

    default:
      return "Unknown";
  }
}