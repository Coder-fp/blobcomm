import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.css";

const users = [
  { name: "Lucas", status: "" },
  { name: "Freddie", status: "" },
  { name: "Billy", status: "" },
  { name: "George", status: "" },
  { name: "Cameron", status: "" },
  { name: "Gabriel", status: "" },
  { name: "Aleks", status: "" },
  { name: "Ruben", status: "" },
];

export default function Register() {
  const [statuses, setStatuses] = useState({});
  const router = useRouter();

  const setStatus = (name, status) => {
    setStatuses((prev) => ({ ...prev, [name]: status }));
  };

  const handleSubmit = async () => {
    const formatted = users.map((user) => ({
      name: user.name,
      status: statuses[user.name] || "Absent",
    }));

    const res = await fetch("/api/sendWebhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userStatus: formatted }),
    });

    if (res.ok) {
      alert("Sent to Discord ✅");
    } else {
      alert("Failed 😩");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Attendance Register</h1>
        <button className={styles.logout} onClick={() => router.push("/")}>
          Logout
        </button>
      </div>

      <div className={styles.userList}>
        {users.map((user) => (
          <div key={user.name} className={styles.row}>
            <span className={styles.name}>{user.name}</span>
            <div className={styles.buttons}>
              {["Present", "Late", "Absent"].map((status) => (
                <button
                  key={status}
                  className={
                    statuses[user.name] === status
                      ? styles.selected
                      : styles.statusBtn
                  }
                  onClick={() => setStatus(user.name, status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className={styles.submit} onClick={handleSubmit}>
        Submit to Discord
      </button>
    </div>
  );
}
