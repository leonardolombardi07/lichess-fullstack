import { PerfType } from "./types";

export function humanReadablePerfType(perfType: PerfType) {
  switch (perfType) {
    case "blitz":
      return "Blitz";
    case "rapid":
      return "Rapid";
    case "bullet":
      return "Bullet";
    case "classical":
      return "Classical";
    case "chess960":
      return "Chess960";
    case "crazyhouse":
      return "Crazyhouse";
    case "antichess":
      return "Antichess";
    case "atomic":
      return "Atomic";
    case "horde":
      return "Horde";
    case "kingOfTheHill":
      return "King of the Hill";
    case "racingKings":
      return "Racing Kings";
    case "threeCheck":
      return "Three Check";
    case "correspondence":
      return "Correspondence";
    case "ultraBullet":
      return "Ultra Bullet";

    default: {
      const exhaustiveCheck: never = perfType;

      if (process.env.NODE_ENV === "development") {
        console.error(`Unhandled perfType: ${exhaustiveCheck}`);
      }

      return "Unknown";
    }
  }
}
