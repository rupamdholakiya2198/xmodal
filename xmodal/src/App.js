import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value.trim();

    if (!username || !email || !phone || !dob) {
      alert("Please fill out all the fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    closeModal();
  };

  return (
    <div className="modal">
      {!isModalOpen && (
        <button onClick={openModal}>Open Form</button>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
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
