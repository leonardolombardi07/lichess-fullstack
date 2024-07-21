import ApiInstance from "../../instance";
import { PerfType } from "../types";

interface RatingProgress {
  before: number;
  after: number;
}

interface Game {
  id: string;
  color: string;
  url: string;
  variant: string | "standard";
  speed: PerfType;
  perf: PerfType;
  rated: boolean;
  opponent: {
    user: string;
    rating: number;
  };
}

interface Score {
  win: number;
  loss: number;
  draw: number;
  rp: RatingProgress;
}

interface Tournament {
  id: string;
  name: string;
}

interface TournamentResult {
  tournament: Tournament;
  nbGames: number;
  score: number;
  rank: number;
  rankPercent: number;
}

interface BestTournament {
  nb: number;
  best: TournamentResult[];
}

interface Practice {
  url: string;
  name: string;
  nbPositions: number;
}

interface Follow {
  in: {
    ids: string[];
  };
  out?: {
    ids: string[];
  };
}

interface Post {
  url: string;
  text: string;
}

interface ForumPost {
  topicUrl: string;
  topicName: string;
  posts: Post[];
}

interface UserActivity {
  interval: {
    start: number;
    end: number;
  };
  games?: {
    [key in PerfType]?: Score;
  };
  puzzles?: {
    score: Score;
  };
  tournaments?: BestTournament;
  practice?: Practice[];
  correspondenceMoves?: {
    nb: number;
    games: Game[];
  };
  correspondenceEnds?: {
    score: Score;
    games: Game[];
  };
  follows?: Follow;
  teams?: {
    url: string;
    name: string;
  }[];
  posts?: ForumPost[];
}

async function getUserActivity({
  username,
}: {
  username: string;
}): Promise<UserActivity> {
  const response = await ApiInstance.get<UserActivity>(
    `/user/${username}/activity`
  );
  return response.data;
}

export { getUserActivity };
export type { UserActivity };
