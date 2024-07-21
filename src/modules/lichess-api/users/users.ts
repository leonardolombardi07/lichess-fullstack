import ApiInstance from "../instance";
import { ValidLeaderboardPerfType } from "./types";

interface LeaderboardPerf {
  rating: number;
  progress: number;
}

interface LeaderboardUser {
  id: string;
  username: string;
  perfs: Record<ValidLeaderboardPerfType, LeaderboardPerf>;
  // Heads up: there will be only one key-value pair in this dictionary, based on the perfType passed in the request.
  title?: string;
  patron?: boolean;
  online?: boolean;
}

interface SingleLeaderboard {
  users: LeaderboardUser[];
}

async function getSingleLeaderboard({
  numPlayers,
  perfType,
}: {
  numPlayers: number;
  perfType: ValidLeaderboardPerfType;
}): Promise<SingleLeaderboard> {
  const response = await ApiInstance.get<SingleLeaderboard>(
    `/player/top/${numPlayers}/${perfType}`
  );
  return response.data;
}

type AllTop10PlayersFromAllLeaderboardsResponseData = {
  [key in ValidLeaderboardPerfType]: LeaderboardUser[];
};

async function getTop10PlayersFromAllLeaderboards(): Promise<AllTop10PlayersFromAllLeaderboardsResponseData> {
  const response = await ApiInstance.get(`/player`);
  return response.data;
}

export { getSingleLeaderboard, getTop10PlayersFromAllLeaderboards };
export type { LeaderboardUser };
