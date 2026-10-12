
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }


function handleSubmit(event) {
  event.preventDefault();

  const existingCustomers = JSON.parse(
    localStorage.getItem("customers") || "[]"
  );

  const newCustomer = {
    id: Date.now(),
    ...formData,
  };

  const updatedCustomers = [
    ...existingCustomers,
    newCustomer,
  ];

  localStorage.setItem(
    "customers",
    JSON.stringify(updatedCustomers)
  );

  alert("Customer saved successfully!");

  navigate("/customers");
}

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Add New Customer</h1>
        <p>Enter the customer's details below.</p>

        <form onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="name">
            Full Name
          </label>
          <input
            style={styles.input}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <label style={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            style={styles.input}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />

          <label style={styles.label} htmlFor="phone">
            Contact Number
          </label>
          <input
            style={styles.input}
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter contact number"
            required
          />

          <label style={styles.label} htmlFor="address">
            Address
          </label>
          <textarea
            style={styles.input}
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            rows="3"
            required
          />

          <button style={styles.button} type="submit">
            Save Customer
          </button>
        </form>

        <p>
          <Link to="/customers">← Back to Customers</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f7fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "25px",
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
  },
  card: {
    width: "100%",
    maxWidth: "550px",
    background: "white",
    padding: "35px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },
  label: {
    display: "block",
    marginTop: "18px",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    marginTop: "25px",
    padding: "14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
