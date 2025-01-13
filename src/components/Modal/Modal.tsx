import { useState, useEffect } from "react";
import { Transaction } from "../../pages/TransactionsPage/types"; //
import "./Modal.css";
import Button from "../../components/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Transaction, "id">) => void;
  initialData: Transaction | null;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [amount, setAmount] = useState<number | "">(initialData?.amount || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [spender, setSpender] = useState(initialData?.spender || "");
  const [date, setDate] = useState<string>(initialData?.date || "");

  useEffect(() => {
    setName(initialData?.name || "");
    setAmount(initialData?.amount || "");
    setCategory(initialData?.category || "");
    setSpender(initialData?.spender || "");
    setDate(initialData?.date || "");
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedAmount =
      typeof amount === "string" ? parseFloat(amount) : amount;

    if (name && parsedAmount && category && spender && date) {
      onSubmit({
        name,
        amount: parsedAmount,
        category,
        spender,
        date,
      });
      setName("");
      setAmount("");
      setCategory("");
      setSpender("");
      setDate("");
      onClose();
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setAmount("");
    } else if (!isNaN(Number(value))) {
      setAmount(Number(value));
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{initialData ? "Edytuj Wydatek" : "Dodaj Wydatek"}</h2>
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
                value={amount === "" ? "" : amount}
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
                <option value="rozrywka">Rozrywka</option>
                <option value="jedzenie na mieście">Jedzenie na mieście</option>
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
