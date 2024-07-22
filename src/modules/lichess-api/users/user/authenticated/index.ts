import AuthenticatedApiInstance from "../../../authenticatedInstance";
import { UserPublicProfile } from "./types";

async function getUserPublicProfile({
  username,
}: {
  username: string;
}): Promise<UserPublicProfile> {
  const response = await AuthenticatedApiInstance.get<UserPublicProfile>(
    `/api/user/${username}`
  );
  return response.data;
}

export { getUserPublicProfile };
