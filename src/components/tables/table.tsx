import { ReactNode } from "react";
import { GrayText } from "../text/GrayText";

export type TableCellProps = {
  children: string | ReactNode;
  isHeader?: boolean;
};

export type TableProps = {
  headers: string[];
  tableData: Array<Array<string | string[] | number | undefined>>;
};

export const Table: React.FC<TableProps> = ({ headers, tableData }) => {
  return (
    <table className="border-gray-400 border-1 p-5">
      <thead className="border-gray-400 border-1">
        <tr>
          {headers.map((header, index) => (
            <TableCell isHeader key={index}>
              {header}
            </TableCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <TableCell key={index}>
                {cell ?? <GrayText>Data unavailable</GrayText>}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
}) => {
  return isHeader ? (
    <th className="border-gray-400 border-1">{children}</th>
  ) : (
    <td className="border-gray-400 border-1">{children}</td>
  );
};
