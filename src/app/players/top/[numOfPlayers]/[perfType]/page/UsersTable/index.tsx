import LichessApi, { ValidLeaderboardPerfType } from "@/modules/lichess-api";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ProgressPositiveIcon from "@mui/icons-material/CallMade";
import ProgressNegativeIcon from "@mui/icons-material/CallReceived";
import Link from "next/link";
import TableSkeleton from "@/components/feedback/TableSkeleton";

interface UsersTableProps {
  numOfPlayers: string;
  perfType: ValidLeaderboardPerfType;
}

export default async function UsersTable({
  numOfPlayers,
  perfType,
}: UsersTableProps) {
  const leaderboard = await LichessApi.getSingleLeaderboard({
    numPlayers: Number(numOfPlayers),
    perfType: perfType,
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Progress</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {leaderboard.users.map((player, index) => {
          const rating = player.perfs[perfType].rating;
          const progress = player.perfs[perfType].progress;
          return (
            <TableRow key={player.username}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Box
                  component={Link}
                  href={`/players/${player.id}`}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",

                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {player.username}
                </Box>
              </TableCell>

              <TableCell>{rating}</TableCell>

              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: progress > 0 ? "success.main" : "error.main",
                }}
              >
                <ProgressIcon progress={progress} />
                {progress}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function ProgressIcon({ progress }: { progress: number }) {
  if (progress > 0) {
    return <ProgressPositiveIcon color="success" />;
  } else {
    return <ProgressNegativeIcon color="error" />;
  }
}

export function UsersTableSkeleton({ numOfPlayers }: { numOfPlayers: string }) {
  return <TableSkeleton numOfColumns={4} numOfRows={Number(numOfPlayers)} />;
}
