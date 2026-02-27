import { useState } from "react";
import logo from "../assets/images/logo1.png";
import Header from "../components/Header";

export default function Admin() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadFromDb() {
    // пока демо (потом подключим реальный fetch)
    setLoading(true);

    // имитация загрузки
    await new Promise((r) => setTimeout(r, 500));

    const demo = [
      { plate: "10-AA-123", action: "ENTRY", gate: "Gate A", time: "2026-02-27 11:05" },
      { plate: "99-ZZ-007", action: "EXIT", gate: "Gate B", time: "2026-02-27 11:22" },
      { plate: "77-KK-555", action: "ENTRY", gate: "Gate A", time: "2026-02-27 11:40" },
    ];

    setLogs(demo);
    setLoading(false);
  }

  return (
    <div>
      <Header />

      <section className="section section--blue">
        <div className="container">
          <h2 className="section__title reveal is-visible">Admin Panel</h2>

          <div className="admin-card reveal is-visible">
            <div className="admin-top">
              <div>
                <div className="admin-title">Entries / Exits</div>
                <div className="admin-sub">Only for project creators (admins).</div>
              </div>

              <button
                className="btn btn--dark btn--pill"
                type="button"
                onClick={loadFromDb}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load from DB"}
              </button>
            </div>

            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Plate</th>
                    <th>Action</th>
                    <th>Gate</th>
                    <th>Time</th>
                  </tr>
                </thead>

                <tbody>
                  {logs.length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ padding: 14, color: "rgba(10,24,51,.65)" }}>
                        No records loaded yet.
                      </td>
                    </tr>
                  ) : (
                    logs.map((row, idx) => (
                      <tr key={`${row.plate}-${row.time}-${idx}`}>
                        <td>{idx + 1}</td>
                        <td>{row.plate}</td>
                        <td>{row.action}</td>
                        <td>{row.gate}</td>
                        <td>{row.time}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="admin-hint">
              Later: we will connect to your backend API (Spring/Node) and show real records.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}