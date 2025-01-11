import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { Transaction } from "./types";
import TransactionsTable from "../../components/Table/TransactionsTable";

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
    <div>
      <h1>Wydatki</h1>

      <TransactionsTable
        transactions={transactions}
        onEdit={editTransactionHandler}
        onDelete={deleteTransaction}
      />

      <button onClick={openModal}>Dodaj wydatek</button>

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

// import React, { useState } from "react";
// import "./TransactionsPage.css";

// interface Transaction {
//   id: number;
//   name: string;
//   amount: number;
//   person: string;
//   category: string;
// }

// const categories = ["Zakupy", "Transport", "Zdrowie", "Rozrywka", "Inne"];

// const TransactionsPage: React.FC = () => {
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [formData, setFormData] = useState<Partial<Transaction>>({
//     id: undefined,
//     name: "",
//     amount: 0,
//     person: "",
//     category: "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "amount" ? parseFloat(value) : value,
//     }));
//   };

//   const handleSubmit = () => {
//     if (
//       !formData.name ||
//       !formData.amount ||
//       !formData.person ||
//       !formData.category
//     ) {
//       alert("Wszystkie pola muszą być wypełnione!");
//       return;
//     }

//     if (formData.id === undefined) {
//       setTransactions((prev) => [
//         ...prev,
//         { ...formData, id: Date.now() } as Transaction,
//       ]);
//     } else {
//       setTransactions((prev) =>
//         prev.map((item) =>
//           item.id === formData.id ? ({ ...formData } as Transaction) : item
//         )
//       );
//     }

//     resetForm();
//     setIsModalOpen(false);
//   };

//   const handleEdit = (transaction: Transaction) => {
//     setFormData(transaction);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (id: number) => {
//     setTransactions((prev) => prev.filter((item) => item.id !== id));
//   };

//   const resetForm = () => {
//     setFormData({
//       id: undefined,
//       name: "",
//       amount: 0,
//       person: "",
//       category: "",
//     });
//   };

//   const calculateTotal = () => {
//     return transactions.reduce(
//       (sum, transaction) => sum + transaction.amount,
//       0
//     );
//   };

//   return (
//     <div className="transactions-page">
//       <h1>Wydatki</h1>
//       <div className="table-container">
//         <table className="transactions-table">
//           <thead>
//             <tr>
//               <th>Nazwa</th>
//               <th>Kwota (PLN)</th>
//               <th>Osoba</th>
//               <th>Kategoria</th>
//               <th>Akcje</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction) => (
//               <tr key={transaction.id}>
//                 <td>{transaction.name}</td>
//                 <td>{transaction.amount}</td>
//                 <td>{transaction.person}</td>
//                 <td>{transaction.category}</td>
//                 <td>
//                   <button onClick={() => handleEdit(transaction)}>
//                     Edytuj
//                   </button>
//                   <button
//                     onClick={() => handleDelete(transaction.id)}
//                     className="delete-button"
//                   >
//                     Usuń
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan={4} className="total-label">
//                 Łączna kwota:
//               </td>
//               <td className="total-value">{calculateTotal().toFixed(2)} PLN</td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>

//       <button
//         className="add-transaction-button"
//         onClick={() => setIsModalOpen(true)}
//       >
//         Dodaj wydatek
//       </button>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>
//               {formData.id === undefined ? "Dodaj wydatek" : "Edytuj wydatek"}
//             </h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSubmit();
//               }}
//             >
//               <div>
//                 <label>Nazwa:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label>Kwota:</label>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={formData.amount || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label>Osoba:</label>
//                 <input
//                   type="text"
//                   name="person"
//                   value={formData.person || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label>Kategoria:</label>
//                 <select
//                   name="category"
//                   value={formData.category || ""}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Wybierz kategorię</option>
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <button type="submit">
//                 {formData.id === undefined ? "Dodaj" : "Zapisz"}
//               </button>
//               <button type="button" onClick={() => setIsModalOpen(false)}>
//                 Anuluj
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {isModalOpen && (
//         <div
//           className="modal-backdrop"
//           onClick={() => setIsModalOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default TransactionsPage;
