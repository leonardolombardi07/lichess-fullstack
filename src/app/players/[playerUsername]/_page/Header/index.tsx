import PlayerStatus from "@/components/modules/players/PlayerStatus";
import LichessAuthenticatedApi from "@/modules/lichess-api/authenticated";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default async function Header({ username }: { username: string }) {
  const user = await LichessAuthenticatedApi.getUserPublicProfile({
    username,
  });

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <PlayerStatus online={false} /> {/* TODO: fetch if online or not */}
        <Typography variant="h3" sx={{ ml: 1 }}>
          {user.username}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          columnGap: 2,
        }}
      >
        <Statistic label="Rating" value={user.playing} />
        <Statistic label="Games" value={user.count.all} />
        <Statistic label="Wins" value={user.count.win} />
        <Statistic label="Draws" value={user.count.draw} />
        <Statistic label="Losses" value={user.count.loss} />
      </Box>
    </Box>
  );
}

function Statistic({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <Box>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Box>
  );
}
