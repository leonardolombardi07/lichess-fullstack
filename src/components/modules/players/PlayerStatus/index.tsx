import Box from "@mui/material/Box";

export default function PlayerStatus({ online }: { online?: boolean }) {
  return (
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        bgcolor:
          online === undefined
            ? "transparent"
            : online
            ? "success.main"
            : "error.main",
        border: online === undefined ? "1px solid" : "none",
        borderColor: "grey.500",
      }}
    />
  );
}
