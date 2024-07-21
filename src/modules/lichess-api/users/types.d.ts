export type ValidLeaderboardPerfType =
  | "bullet"
  | "blitz"
  | "rapid"
  | "classical"
  | "chess960"
  | "crazyhouse"
  | "antichess"
  | "atomic"
  | "horde"
  | "kingOfTheHill"
  | "racingKings"
  | "threeCheck"
  | "correspondence";

export type PerfType =
  | ValidLeaderboardPerfType
  | "ultraBullet"
  | "correspondence";

export type PerfTypeName =
  | "Bullet"
  | "Blitz"
  | "Rapid"
  | "Classical"
  | "Correspondence"
  | "Chess960"
  | "Crazyhouse"
  | "Antichess"
  | "Atomic"
  | "Horde"
  | "King of the Hill"
  | "Racing Kings"
  | "Three-check";
