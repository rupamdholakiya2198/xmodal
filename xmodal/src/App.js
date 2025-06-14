
import React, { useState } from "react";
import Modal from "./component/xmodal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleopen = () => {
    setOpenModal(true);
  };

  return (
    <div className="main">
      <h1>User Details Modal</h1>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          padding: "1rem",
          borderRadius: "10px",
          fontSize: "larger",
        }}
        onClick={handleopen}
      >
        Open Form
      </button>
      <div>{openModal && <Modal closeModal={setOpenModal} />}</div>
    </div>
  );
}

export default App;