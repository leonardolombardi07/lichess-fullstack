import {
  ValidLeaderboardPerfType,
  LeaderboardUser,
} from "@/modules/lichess-api";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import PlayerStatus from "./PlayerStatus";

export default function PlayerCard({
  id,
  username,
  perfs,
  online,
}: LeaderboardUser) {
  const singleKey = Object.keys(perfs)[0] as ValidLeaderboardPerfType;
  const rating = perfs[singleKey].rating;
  return (
    <Box
      component={Link}
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        // Disable default anchor styles
        textDecoration: "none",
        color: "inherit",

        // Add hover effect
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      href={`/players/${id}`}
    >
      <PlayerStatus online={online} />
      <Typography
        variant="body1"
        sx={{
          // Add ellipsis to overflow text
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {username}
      </Typography>
      <Typography variant="body2">{rating}</Typography>
    </Box>
  );
}

export function PlayerCardSkeleton() {
  return <Skeleton height={50} />;
}
