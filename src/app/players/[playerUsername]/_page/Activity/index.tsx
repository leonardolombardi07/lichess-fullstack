import LichessApi from "@/modules/lichess-api";

export default async function Activity({ username }: { username: string }) {
  const activity = await LichessApi.getUserActivity({
    username,
  });

  return null;
}
