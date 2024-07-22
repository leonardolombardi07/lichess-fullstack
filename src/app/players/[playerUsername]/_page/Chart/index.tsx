import LichessApi from "@/modules/lichess-api";
import ChartUI from "./Client";

export default async function Chart({ username }: { username: string }) {
  const ratingEntries = await LichessApi.getUserRatingHistoryEntries({
    username,
  });

  return <ChartUI ratingEntries={ratingEntries} />;
}
