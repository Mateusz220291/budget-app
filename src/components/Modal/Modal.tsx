import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; amount: number; category: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const category = formData.get("category") as string;

    onSubmit({ name, amount, category });
    onClose();
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
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Kwota:</label>
              <input type="number" id="amount" name="amount" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Kategoria:</label>
              <select id="category" name="category" required>
                <option value="zakupy">Zakupy</option>
                <option value="transport">Transport</option>
                <option value="zdrowie">Zdrowie</option>
              </select>
            </div>
            <button type="submit" className="btn-submit">
              Dodaj
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
