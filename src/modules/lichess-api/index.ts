import ApiInstance from "./instance";
import * as usersFunctions from "./users";

const LichessApi = Object.assign({ ...usersFunctions }, ApiInstance);

export default LichessApi;
export * from "./users";
