import Box from "@mui/material/Box";
import Header from "./_page/Header";
import Chart from "./_page/Chart";
import Activity from "./_page/Activity";

interface PageProps {
  params: {
    playerUsername: string;
  };
}

export default async function Page({ params }: PageProps) {
  const username = params.playerUsername;
  return (
    <Box>
      <Header username={username} />
      <Box>
        <Chart username={username} />
      </Box>

      <Activity username={username} />
    </Box>
  );
}
