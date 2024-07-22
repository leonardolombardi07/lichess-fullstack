import ApiInstance from "./instance";
import * as usersFunctions from "./users";
import { cacheAllFunctions } from "./utils";

const cachedUserFunctions = cacheAllFunctions(
  usersFunctions
) as typeof usersFunctions;

const LichessApi = Object.assign({ ...cachedUserFunctions }, ApiInstance);

export default LichessApi;
export * from "./users";
