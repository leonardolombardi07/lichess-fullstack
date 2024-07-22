import PlayerCard, {
  PlayerCardSkeleton,
} from "@/components/modules/players/PlayerCard";
import LichessApi, { ValidLeaderboardPerfType } from "@/modules/lichess-api";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default async function OnlinePlayers() {
  const allTop10 = await LichessApi.getTop10PlayersFromAllLeaderboards();

  const allTop10AsArray = Object.entries(allTop10).map(
    ([perfType, players]) => ({
      perfType: perfType as ValidLeaderboardPerfType,
      players,
    })
  );

  const onlinePlayers = allTop10AsArray
    .flatMap((leaderboard) => leaderboard.players)
    .filter((player) => player.online);

  return (
    <Box>
      {onlinePlayers.length === 0 && <Empty />}

      {onlinePlayers.map((player) => (
        <Box
          key={player.id}
          sx={{
            maxWidth: {
              xs: "100%",
              lg: 300,
            },
          }}
        >
          <PlayerCard {...player} />
        </Box>
      ))}
    </Box>
  );
}

function Empty() {
  return (
    <Box>
      <Typography variant="body2">No online players</Typography>
    </Box>
  );
}

export function OnlinePlayersSkeleton() {
  return (
    <Box>
      {Array.from({ length: 10 }).map((_, index) => (
        <PlayerCardSkeleton key={index} />
      ))}
    </Box>
  );
}
