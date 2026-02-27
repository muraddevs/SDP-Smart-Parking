import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import Header from "../components/Header";

const demoParkings = [
  { id: "1234", name: "VUB Campus Parking", city: "Brussels", free: 12, occupied: 38 },
  { id: "7788", name: "City Center Garage", city: "Brussels", free: 3, occupied: 97 },
  { id: "9900", name: "Airport P1", city: "Zaventem", free: 40, occupied: 160 },
];

const demoVisits = [
  { plate: "10-AA-123", parking: "VUB Campus Parking", time: "2026-02-26 18:20", action: "ENTRY" },
  { plate: "10-AA-123", parking: "City Center Garage", time: "2026-02-25 12:05", action: "EXIT" },
  { plate: "99-ZZ-007", parking: "Airport P1", time: "2026-02-23 08:41", action: "ENTRY" },
];

export default function Dashboard() {
  return (
    <div>
      <Header />

      <section className="section section--blue" style={{ minHeight: "auto", padding: "96px 0 70px" }}>
        <div className="container">
          <h2 className="section__title reveal is-visible">Main Screen</h2>

          {/* Parking cards */}
          <div className="cards3" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {demoParkings.map((p) => (
              <div key={p.id} className="info-card reveal is-visible" style={{ width: "100%" }}>
                <h3 style={{ marginTop: 6 }}>{p.name}</h3>
                <p style={{ marginBottom: 10 }}>{p.city}</p>

                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 12, opacity: 0.7 }}>Free</div>
                    <div style={{ fontWeight: 900, fontSize: 26, color: "#1f5eff" }}>{p.free}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 12, opacity: 0.7 }}>Occupied</div>
                    <div style={{ fontWeight: 900, fontSize: 26 }}>{p.occupied}</div>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <Link className="btn btn--dark btn--pill" to={`/parking/${p.id}`}>
                    Open Parking
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="admin-card reveal is-visible" style={{ marginTop: 30 }}>
            <div className="admin-top">
              <div>
                <div className="admin-title">Last visits</div>
                <div className="admin-sub">Recent entries / exits (demo data).</div>
              </div>
            </div>

            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Plate</th>
                    <th>Parking</th>
                    <th>Action</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {demoVisits.map((v, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{v.plate}</td>
                      <td>{v.parking}</td>
                      <td>{v.action}</td>
                      <td>{v.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-hint">
              Later we will replace demo data with backend API data.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}