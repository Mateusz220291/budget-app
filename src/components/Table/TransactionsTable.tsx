import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Transaction } from "../../pages/TransactionsPage/types";
import Button from "../Button/Button";
import "./TransactionsTable.css";

interface TransactionsTableProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: number) => void;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
  onEdit,
  onDelete,
}) => {
  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "name",
      header: "Nazwa wydatku",
    },
    {
      accessorKey: "amount",
      header: "Kwota",
    },
    {
      accessorKey: "category",
      header: "Kategoria",
    },
    {
      accessorKey: "date",
      header: "Data",
    },
    {
      accessorKey: "spender",
      header: "Wydający",
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
            style={{ marginRight: "10px" }}
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
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalAmount = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const getCategoryClass = (category: string) => {
    switch (category) {
      case "transport":
        return "category-transport";
      case "zdrowie":
        return "category-health";
      case "zakupy":
        return "category-shopping";
      case "inne":
        return "category-other";
      case "jedzenie na mieście":
        return "category-eat-out";
      case "rozrywka":
        return "entertainment";
      default:
        return "category-other";
    }
  };

  return (
    <table>
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
          <tr key={row.id} className={getCategoryClass(row.original.category)}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        <div className="total-sum">
          <strong>Razem: {totalAmount.toFixed(2)} PLN</strong>
        </div>
      </tbody>
    </table>
  );
};

export default TransactionsTable;
