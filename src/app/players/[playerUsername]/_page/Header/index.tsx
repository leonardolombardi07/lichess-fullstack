import PlayerStatus from "@/components/modules/players/PlayerStatus";
import LichessAuthenticatedApi from "@/modules/lichess-api/authenticated";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default async function Header({ username }: { username: string }) {
  // const user = await LichessAuthenticatedApi.getUserPublicProfile({
  //   username,
  // });

  const user = {
    username,
    playing: 1500,
    count: {
      all: 100,
      win: 50,
      draw: 25,
      loss: 25,
    },
  };

  const isUserOnline = false; // TODO: fetch if online or not

  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <PlayerStatus online={isUserOnline} />
        <Typography variant="h4" sx={{ ml: 1, mb: 0.5 }}>
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
    </Paper>
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
      <Typography variant="h6">{value}</Typography>
    </Box>
  );
}
