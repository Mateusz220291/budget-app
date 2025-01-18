import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { Transaction } from "./types";
import TransactionsTable from "../../components/Table/TransactionsTable";
import Button from "../../components/Button/Button";
import "./TransactionsPage.css";
import TransactionsPieChart from "../../components/Charts/TransactionsPieChart";

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editTransaction, setEditTransaction] = useState<Transaction | null>(
    null
  );

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  const openModal = () => {
    setIsModalOpen(true);
    setEditTransaction(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addOrEditTransaction = (
    newTransactionData: Omit<Transaction, "id">
  ) => {
    if (editTransaction) {
      const updatedTransactions = transactions.map((transaction) =>
        transaction.id === editTransaction.id
          ? { ...editTransaction, ...newTransactionData }
          : transaction
      );
      setTransactions(updatedTransactions);
    } else {
      const newTransaction = {
        ...newTransactionData,
        id: Date.now(),
      };
      setTransactions([...transactions, newTransaction]);
    }
    setIsModalOpen(false);
  };

  const deleteTransaction = (id: number) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const editTransactionHandler = (transaction: Transaction) => {
    setEditTransaction(transaction);
    setIsModalOpen(true);
  };

  return (
    <div className="transaction-page-container">
      <h1 className="transaction-page-title">Wydatki</h1>
      <div className="transaction-page-content">
        <div className="left-column">
          <TransactionsTable
            transactions={transactions}
            onEdit={editTransactionHandler}
            onDelete={deleteTransaction}
          />

          <Button
            variant="primary"
            onClick={openModal}
            style={{ width: "auto", maxWidth: "200px" }}
          >
            Dodaj wydatek
          </Button>
        </div>
        <div className="right-column">
          <TransactionsPieChart
            transactions={transactions}
          ></TransactionsPieChart>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={addOrEditTransaction}
        initialData={editTransaction}
      />
    </div>
  );
};

export default TransactionsPage;
