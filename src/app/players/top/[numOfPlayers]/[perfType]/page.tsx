import {
  humanReadablePerfType,
  ValidLeaderboardPerfType,
} from "@/modules/lichess-api";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GoBackIconButton from "@/components/navigation/GoBackIconButton";
import { Suspense } from "react";
import UsersTable, { UsersTableSkeleton } from "./page/UsersTable";

interface PageProps {
  params: {
    numOfPlayers: string;
    perfType: ValidLeaderboardPerfType;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <Container
      component={Paper}
      sx={{
        px: {
          xs: 0,
          md: 4,
        },
        py: {
          xs: 1,
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

      <Suspense fallback={<UsersTableSkeleton {...params} />}>
        <UsersTable {...params} />
      </Suspense>
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
