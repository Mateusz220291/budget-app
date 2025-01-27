import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import Button from "../Button/Button";
import { RecurringBill } from "../../pages/RecurringBillsPage/types";
import "./RecurringBillsTable.css";

interface RecurringBillsTableProps {
  bills: RecurringBill[];
  onEdit: (bill: RecurringBill) => void;
  onDelete: (id: number) => void;
}

const RecurringBillsTable: React.FC<RecurringBillsTableProps> = ({
  bills,
  onEdit,
  onDelete,
}) => {
  const columns: ColumnDef<RecurringBill>[] = [
    {
      accessorKey: "name",
      header: "Nazwa",
    },
    {
      accessorKey: "amount",
      header: "Kwota",
      cell: ({ getValue }) => `${getValue<number>().toFixed(2)} PLN`,
    },
    {
      id: "actions",
      header: "Akcje",
      cell: ({ row }) => (
        <div>
          <Button
            variant="secondary"
            size="small"
            onClick={() => onEdit(row.original)}
          >
            Edytuj
          </Button>
          <Button
            variant="danger"
            size="small"
            onClick={() => onDelete(row.original.id)}
          >
            Usuń
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: bills,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="recurring-bills-table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecurringBillsTable;
