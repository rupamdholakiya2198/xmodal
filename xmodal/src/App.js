import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value.trim();

    // Check for empty fields
    if (!username || !email || !phone || !dob) {
      alert("Please fill out all the fields.");
      return;
    }

    
    if (!email.includes("@")) {
      alert('Invalid email');
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number');
      return;
    }

    // Date of birth validation
    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate > today) {
      alert('Invalid date of birth');
      return;
    }

    // If everything is valid, close modal
    closeModal();
  };

  return (
    <div className="modal">
      {!isModalOpen && (
        <button onClick={openModal}>Open Form</button>
      )}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside form
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input type="text" id="username" />
              </div>
              <div>
                <label>Email:</label>
                <input type="text" id="email" />
              </div>
              <div>
                <label>Phone:</label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input type="date" id="dob" />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
