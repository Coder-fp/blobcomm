  import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.css";  // Import your CSS Module for styles

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "secret123") {
      router.push("/register");
    } else {
      setError("Wrong password 😬");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <form
        onSubmit={handleLogin}
        className={styles.container} // Using your CSS Module class here
      >
        <h2 className={styles.header}>Login</h2> {/* Use the header class from Register.module.css */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}
