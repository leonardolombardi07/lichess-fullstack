export const APP_NAME = "Lichess Assignment";
export const APP_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://lichess-assignment.vercel.app"
    : "http://localhost:3000";
