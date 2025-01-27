import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import RecurringBillsTable from "../../components/Table/RecurringBillsTable";
import RecurringBillsPieChart from "../../components/Charts/RecurringBillsPieChart";
import Button from "../../components/Button/Button";
import { RecurringBill } from "../RecurringBillsPage/types";
import "./RecurringBillsPage.css";

const RecurringBillsPage: React.FC = () => {
  const [bills, setBills] = useState<RecurringBill[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editBill, setEditBill] = useState<RecurringBill | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setEditBill(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddOrEdit = (billData: Omit<RecurringBill, "id">) => {
    if (editBill) {
      setBills((prev) =>
        prev.map((bill) =>
          bill.id === editBill.id ? { ...bill, ...billData } : bill
        )
      );
    } else {
      const newBill = { ...billData, id: Date.now() };
      setBills((prev) => [...prev, newBill]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    setBills((prev) => prev.filter((bill) => bill.id !== id));
  };

  return (
    <div className="recurring-bills-page">
      <h1>Wydatki Cykliczne</h1>
      <div className="recurring-bills-content">
        <div className="left-column">
          <RecurringBillsTable
            bills={bills}
            onEdit={(bill) => {
              setEditBill(bill);
              openModal();
            }}
            onDelete={handleDelete}
          />
          <Button onClick={openModal} variant="primary">
            Dodaj Wydatek
          </Button>
        </div>
        <div className="right-column">
          <RecurringBillsPieChart bills={bills} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddOrEdit}
        initialData={editBill}
      />
    </div>
  );
};

export default RecurringBillsPage;
