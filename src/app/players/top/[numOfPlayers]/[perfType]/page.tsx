import LichessApi, {
  humanReadablePerfType,
  ValidLeaderboardPerfType,
} from "@/modules/lichess-api";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ProgressPositiveIcon from "@mui/icons-material/CallMade";
import ProgressNegativeIcon from "@mui/icons-material/CallReceived";
import Link from "next/link";
import GoBackIconButton from "@/components/navigation/GoBackIconButton";

interface PageProps {
  params: {
    numOfPlayers: string;
    perfType: ValidLeaderboardPerfType;
  };
}

export default async function Page({ params }: PageProps) {
  const leaderboard = await LichessApi.getSingleLeaderboard({
    numPlayers: Number(params.numOfPlayers),
    perfType: params.perfType,
  });

  return (
    <Container
      component={Paper}
      sx={{
        p: {
          xs: 0,
          md: 4,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <GoBackIconButton fontSize="large" />

        <Typography
          variant="h4"
          sx={{
            ml: 2,
          }}
        >
          {getTitleFromParams(params)}
        </Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              fontWeight: "bold",
            }}
          >
            <TableCell>Rank</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Progress</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {leaderboard.users.map((player, index) => {
            const rating = player.perfs[params.perfType].rating;
            const progress = player.perfs[params.perfType].progress;
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

                      // Add hover effect
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
    </Container>
  );
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: getTitleFromParams(params),
  };
}

function getTitleFromParams(params: PageProps["params"]) {
  const { numOfPlayers, perfType } = params;
  return `${humanReadablePerfType(perfType)} top  ${numOfPlayers}`;
}

function ProgressIcon({ progress }: { progress: number }) {
  if (progress > 0) {
    return <ProgressPositiveIcon color="success" />;
  } else {
    return <ProgressNegativeIcon color="error" />;
  }
}
