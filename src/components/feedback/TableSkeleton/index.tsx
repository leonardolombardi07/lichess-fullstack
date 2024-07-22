import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Skeleton from "@mui/material/Skeleton";

interface TableSkeletonProps {
  numOfColumns: number;
  numOfRows: number;
}

export default function TableSkeleton({
  numOfColumns,
  numOfRows,
}: TableSkeletonProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {Array.from({ length: numOfColumns }).map((_, index) => (
            <TableCell key={index}></TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {Array.from({ length: numOfRows }).map((_, index) => (
          <TableRow key={index}>
            {Array.from({ length: numOfColumns }).map((_, index) => (
              <TableCell key={index}>
                <Skeleton />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
