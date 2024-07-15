import { useState } from "react";
import Modal from "./Modal";

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          border: "1px solid #ddd",
          padding: "8px 16px",
          borderRadius: 6,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>
      <Modal open={open} onCancel={() => setOpen(false)}>
        Content...
      </Modal>
    </div>
  );
};

export default ModalExample;
