import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Transaction } from "../../pages/TransactionsPage/types";
import "./TransactionsTable.css";

interface TransactionsTableProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void; // Funkcja do edytowania transakcji
  onDelete: (id: number) => void; // Funkcja do usuwania transakcji
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
          <button onClick={() => onEdit(row.original)}>Edytuj</button>
          <button onClick={() => onDelete(row.original.id)}>Usuń</button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Obliczanie sumy wydatków
  const totalAmount = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  return (
    <div>
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

      {/* Suma wydatków */}
      <div className="total-sum">
        <strong>Razem: {totalAmount.toFixed(2)} PLN</strong>
      </div>
    </div>
  );
};

export default TransactionsTable;
