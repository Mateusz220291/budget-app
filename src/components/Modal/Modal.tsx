import React, { useState } from "react";
import { Transaction } from "../../pages/TransactionsPage/types"; //
// Zaimportuj typ Transaction
import "./Modal.css";
import Button from "../../components/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Transaction, "id">) => void; // Przekazujemy dane bez 'id'
  initialData: Transaction | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number | "">(""); // Stan może być stringiem lub numberem
  const [category, setCategory] = useState("");
  const [spender, setSpender] = useState("");
  const [date, setDate] = useState<string>(""); // Nowe pole na datę

  if (!isOpen) return null; // Jeśli modal nie jest otwarty, nic nie wyświetlamy

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sprawdzamy, czy amount jest pustym ciągiem czy liczbą i konwertujemy to na float
    const parsedAmount =
      typeof amount === "string" ? parseFloat(amount) : amount;

    // Wysyłamy dane tylko jeśli wszystkie pola są wypełnione poprawnie
    if (name && parsedAmount && category && spender && date) {
      onSubmit({
        name,
        amount: parsedAmount,
        category,
        spender,
        date, // Dodajemy datę do wysyłanych danych
      });
      setName(""); // Resetujemy pola po submit
      setAmount(""); // Resetujemy kwotę
      setCategory("");
      setSpender("");
      setDate(""); // Resetujemy datę
      onClose();
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setAmount(""); // Pozwól na pusty ciąg
    } else if (!isNaN(Number(value))) {
      setAmount(Number(value)); // Konwertuj na liczbę
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Dodaj Wydatek</h2>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nazwa wydatku:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Kwota:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount === "" ? "" : amount} // Umożliwia puste pole
                onChange={handleAmountChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Kategoria:</label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Wybierz kategorię:
                </option>
                <option value="zakupy">Zakupy</option>
                <option value="transport">Transport</option>
                <option value="zdrowie">Zdrowie</option>
                <option value="inne">Inne</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="person">Osoba:</label>
              <select
                id="person"
                name="person"
                value={spender}
                onChange={(e) => setSpender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Wybierz osobę:
                </option>
                <option value="Kinga">Kinga</option>
                <option value="Mateusz">Mateusz</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Data wydatku:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="primary">
              Dodaj
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import "./Modal.css";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (data: { name: string; amount: number; category: string }) => void;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
//   if (!isOpen) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     const name = formData.get("name") as string;
//     const amount = parseFloat(formData.get("amount") as string);
//     const category = formData.get("category") as string;

//     onSubmit({ name, amount, category });
//     onClose();
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <h2>Dodaj Wydatek</h2>
//           <button className="modal-close-btn" onClick={onClose}>
//             &times;
//           </button>
//         </div>
//         <div className="modal-body">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Nazwa wydatku:</label>
//               <input type="text" id="name" name="name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="amount">Kwota:</label>
//               <input type="number" id="amount" name="amount" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="category">Kategoria:</label>
//               <select id="category" name="category" required>
//                 <option value="zakupy">Zakupy</option>
//                 <option value="transport">Transport</option>
//                 <option value="zdrowie">Zdrowie</option>
//               </select>
//             </div>
//             <button type="submit" className="btn-submit">
//               Dodaj
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
