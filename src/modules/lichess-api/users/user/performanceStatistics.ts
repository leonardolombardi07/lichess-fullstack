import ApiInstance from "../../instance";
import { PerfType } from "../types";

interface User {
  name: string;
}

interface Glicko {
  rating: number;
  deviation: number;
}

interface Performance {
  glicko: Glicko;
  nb: number;
  progress: number;
}

interface Count {
  berserk: number;
  win: number;
  all: number;
  seconds: number;
  opAvg: number;
  draw: number;
  tour: number;
  disconnects: number;
  rated: number;
  loss: number;
}

interface StreakDetail {
  v: number;
  from: {
    at: string;
    gameId: string;
  };
  to?: {
    at: string;
    gameId: string;
  };
}

interface ResultStreak {
  win: {
    cur: StreakDetail;
    max: StreakDetail;
  };
  loss: {
    cur: StreakDetail;
    max: StreakDetail;
  };
}

interface Opponent {
  id: string;
  name: string;
  title: string | null;
}

interface GameResult {
  opRating: number;
  opId: Opponent;
  at: string;
  gameId: string;
}

interface PerformanceType {
  key: string;
  name: string;
}

interface PlayStreakDetail {
  v: number;
  from: {
    at: string;
    gameId: string;
  };
  to: {
    at: string;
    gameId: string;
  };
}

interface PlayStreak {
  nb: {
    cur: {
      v: number;
    };
    max: PlayStreakDetail;
  };
  time: {
    cur: {
      v: number;
    };
    max: PlayStreakDetail;
  };
  lastDate: string;
}

interface Statistics {
  count: Count;
  resultStreak: ResultStreak;
  lowest: {
    int: number;
    at: string;
    gameId: string;
  };
  worstLosses: {
    results: GameResult[];
  };
  perfType: PerformanceType;
  id: string;
  bestWins: {
    results: GameResult[];
  };
  userId: Opponent;
  playStreak: PlayStreak;
  highest: {
    int: number;
    at: string;
    gameId: string;
  };
}

interface UserPerfomanceStatistics {
  user: User;
  perf: Performance;
  rank: number;
  percentile: number;
  stat: Statistics;
}

async function getUserPerfomanceStatistics({
  username,
  perfType,
}: {
  username: string;
  perfType: PerfType;
}): Promise<UserPerfomanceStatistics> {
  const response = await ApiInstance.get<UserPerfomanceStatistics>(
    `/user/${username}/perf/${perfType}`
  );
  return response.data;
}

export { getUserPerfomanceStatistics };
export type { UserPerfomanceStatistics };
