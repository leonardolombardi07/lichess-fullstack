import LichessApi from "@/modules/lichess-api";

export default async function Page() {
  const leaderboard = await LichessApi.getSingleLeaderboard({
    numPlayers: 50,
    perfType: "classical",
  });
  return 2;
}
