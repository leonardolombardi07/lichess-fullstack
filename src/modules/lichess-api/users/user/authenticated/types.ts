import { PerfType } from "../../types";

export interface UserPublicProfile {
  id: string;
  username: string;
  perfs: Perfs;
  flair: string;
  createdAt: number;
  disabled: boolean;
  tosViolation: boolean;
  profile: Profile;
  seenAt: number;
  patron: boolean;
  verified: boolean;
  playTime: PlayTime;
  title: string;
  url: string;
  playing: string;
  count: Count;
  streaming: boolean;
  streamer: Streamer;
  followable: boolean;
  following: boolean;
  blocking: boolean;
  followsYou: boolean;
}

export interface Perf {
  games: number;
  rating: number;
  rd: number;
  prog: number;
  prov: boolean;
}

export type Perfs = {
  [key in PerfType]?: RunScore;
};

export interface RunScore {
  runs: number;
  score: number;
}

export interface Profile {
  flag: string;
  location: string;
  bio: string;
  realName: string;
  fideRating: number;
  uscfRating: number;
  ecfRating: number;
  cfcRating: number;
  dsbRating: number;
  links: string;
}

export interface PlayTime {
  total: number;
  tv: number;
}

export interface Count {
  all: number;
  rated: number;
  ai: number;
  draw: number;
  drawH: number;
  loss: number;
  lossH: number;
  win: number;
  winH: number;
  bookmark: number;
  playing: number;
  import: number;
  me: number;
}

export interface Streamer {
  twitch?: Channel;
  youTube?: Channel;
}

export interface Channel {
  channel: string;
}
