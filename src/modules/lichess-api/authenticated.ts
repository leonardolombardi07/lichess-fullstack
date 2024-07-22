import "server-only";

import AuthenticatedApiInstance from "./authenticatedInstance";
import * as userAuthenticatedFunctions from "./users/user/authenticated";
import { cacheAllFunctions } from "./utils";

const cachedUserFunctions = cacheAllFunctions(
  userAuthenticatedFunctions
) as typeof userAuthenticatedFunctions;

const LichessAuthenticatedApi = Object.assign(
  { ...cachedUserFunctions },
  AuthenticatedApiInstance
);

export default LichessAuthenticatedApi;
export * from "./users";
