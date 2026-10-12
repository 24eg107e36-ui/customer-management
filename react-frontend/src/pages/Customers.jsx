import { useState } from "react";
import { Link } from "react-router-dom";

export default function Customers() {
  
const [customers, setCustomers] = useState(() => {
  return JSON.parse(localStorage.getItem("customers") || "[]");
});

const [search, setSearch] = useState("");


  const filteredCustomers = customers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  
function deleteCustomer(id) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this customer?"
  );

  if (confirmed) {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== id
    );

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
    );

    setCustomers(updatedCustomers);
  }
}

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <h2>Customer MS</h2>
        <Link to="/dashboard" style={styles.link}>🏠 Dashboard</Link>
        <Link to="/customers" style={styles.link}>👥 Customers</Link>
        <Link to="/add-customer" style={styles.link}>➕ Add Customer</Link>
        <Link to="/login" style={styles.link}>🚪 Logout</Link>
      </aside>

      <main style={styles.main}>
        <div style={styles.header}>
          <div>
            <h1>Customers</h1>
            <p>View and manage your customer information.</p>
          </div>

          <Link to="/add-customer" style={styles.addButton}>
            + Add Customer
          </Link>
        </div>

        <input
          style={styles.search}
          type="text"
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.cell}>ID</th>
                <th style={styles.cell}>Name</th>
                <th style={styles.cell}>Email</th>
                <th style={styles.cell}>Phone</th>
                <th style={styles.cell}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="5" style={styles.empty}>
                    No customers found. Add your first customer!
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td style={styles.cell}>{customer.id}</td>
                    <td style={styles.cell}>{customer.name}</td>
                    <td style={styles.cell}>{customer.email}</td>
                    <td style={styles.cell}>{customer.phone}</td>
                    <td style={styles.cell}>
                      <Link
                        to={`/edit-customer/${customer.id}`}
                        style={styles.editButton}
                      >
                        Edit
                      </Link>{" "}
                      <button
                        onClick={() => deleteCustomer(customer.id)}
                        style={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f7fb",
    color: "#1e293b",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "220px",
    flexShrink: 0,
    background: "#172554",
    color: "white",
    padding: "25px 18px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  main: {
    flex: 1,
    minWidth: 0,
    padding: "35px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },
  addButton: {
    background: "#2563eb",
    color: "white",
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
  },
  search: {
    width: "100%",
    maxWidth: "500px",
    padding: "14px",
    marginBottom: "25px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  tableContainer: {
    background: "white",
    borderRadius: "12px",
    padding: "15px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  cell: {
    padding: "16px 12px",
    borderBottom: "1px solid #e2e8f0",
  },
  empty: {
    padding: "30px",
    textAlign: "center",
    color: "#64748b",
  },
  editButton: {
    color: "#2563eb",
    textDecoration: "none",
  },
  deleteButton: {
    color: "#dc2626",
    background: "white",
    border: "1px solid #dc2626",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
