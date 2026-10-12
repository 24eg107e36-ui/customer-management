
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Customer MS</h2>

        <Link to="/dashboard" style={styles.link}>
          🏠 Dashboard
        </Link>

        <Link to="/customers" style={styles.link}>
          👥 Customers
        </Link>

        <Link to="/add-customer" style={styles.link}>
          ➕ Add Customer
        </Link>

        <Link to="/login" style={styles.link}>
          🚪 Logout
        </Link>
      </aside>

      <main style={styles.main}>
        <h1>Dashboard</h1>
        <p>Welcome to your Customer Management System!</p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Total Customers</h3>
            <h2>0</h2>
          </div>

          <div style={styles.card}>
            <h3>New Customers</h3>
            <h2>0</h2>
          </div>

          <div style={styles.card}>
            <h3>Updated Records</h3>
            <h2>0</h2>
          </div>
        </div>

        <section style={styles.section}>
          <h2>Quick Actions</h2>

          <Link to="/customers">
            <button style={styles.button}>View Customers</button>
          </Link>

          <Link to="/add-customer">
            <button style={styles.button}>Add New Customer</button>
          </Link>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
  },
  sidebar: {
    width: "230px",
    backgroundColor: "#172554",
    padding: "25px 18px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  logo: {
    color: "white",
    marginBottom: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "8px",
  },
  main: {
    flex: 1,
    padding: "35px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
  },
  section: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    marginTop: "30px",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 18px",
    margin: "8px",
    cursor: "pointer",
  },
};
