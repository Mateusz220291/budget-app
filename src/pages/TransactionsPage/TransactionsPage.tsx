import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { Transaction } from "./types";
import TransactionsTable from "../../components/Table/TransactionsTable";
import Button from "../../components/Button/Button";
import "./TransactionsPage.css";

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editTransaction, setEditTransaction] = useState<Transaction | null>(
    null
  );

  // 1. Ładujemy dane z localStorage przy pierwszym renderze komponentu
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions)); // Parsujemy dane JSON i ustawiamy stan
    }
  }, []);

  // 2. Zapisujemy dane do localStorage po każdej zmianie w stanie transactions
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions)); // Zapisujemy dane w localStorage
    }
  }, [transactions]);

  const openModal = () => {
    setIsModalOpen(true);
    setEditTransaction(null); // Resetowanie edycji przed dodaniem nowej transakcji
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addOrEditTransaction = (
    newTransactionData: Omit<Transaction, "id">
  ) => {
    if (editTransaction) {
      // Edytowanie transakcji
      const updatedTransactions = transactions.map((transaction) =>
        transaction.id === editTransaction.id
          ? { ...editTransaction, ...newTransactionData }
          : transaction
      );
      setTransactions(updatedTransactions);
    } else {
      // Dodawanie nowej transakcji
      const newTransaction = {
        ...newTransactionData,
        id: transactions.length + 1, // Możesz zmienić sposób generowania id
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

      <TransactionsTable
        transactions={transactions}
        onEdit={editTransactionHandler}
        onDelete={deleteTransaction}
      />

      <Button variant="primary" onClick={openModal}>
        Dodaj wydatek
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={addOrEditTransaction}
        initialData={editTransaction} // Przekazujemy transakcję do edycji, jeśli jest
      />
    </div>
  );
};

export default TransactionsPage;
