import ApiInstance from "../../instance";
import { PerfTypeName } from "../types";

type Year = number; // e.g. 2021
type ZeroIndexMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11; // January is 0
type Day = number; // 1-31
type Rating = number; // e.g. 1500
type DateTuple = [Year, ZeroIndexMonth, Day];

type RatingPoint = [...DateTuple, Rating];
type RatingHistory = RatingPoint[];

interface UserRatingHistoryEntry {
  name: PerfTypeName;
  points: RatingHistory;
}

async function getUserRatingHistoryEntries({
  username,
}: {
  username: string;
}): Promise<UserRatingHistoryEntry[]> {
  const response = await ApiInstance.get<UserRatingHistoryEntry[]>(
    `/user/${username}/rating-history`
  );
  return response.data;
}

export { getUserRatingHistoryEntries };
export type { UserRatingHistoryEntry };
