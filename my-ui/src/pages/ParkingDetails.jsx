import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import Header from "../components/Header";

const demoById = {
  "1234": { name: "VUB Campus Parking", address: "Brussels", free: 12, occupied: 38 },
  "7788": { name: "City Center Garage", address: "Brussels", free: 3, occupied: 97 },
  "9900": { name: "Airport P1", address: "Zaventem", free: 40, occupied: 160 },
};

export default function ParkingDetails() {
  const { id } = useParams();
  const data = demoById[id];

  return (
    <div>
      <Header />

      <section className="section section--blue" style={{ minHeight: "auto", padding: "96px 0 70px" }}>
        <div className="container">
          <h2 className="section__title reveal is-visible">Parking Page</h2>

          {!data ? (
            <div className="admin-card reveal is-visible">
              <div className="admin-title">Parking not found</div>
              <div className="admin-sub">ID: {id}</div>
              <div style={{ marginTop: 12 }}>
                <Link className="btn btn--dark btn--pill" to="/dashboard">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="admin-card reveal is-visible">
              <div className="admin-top">
                <div>
                  <div className="admin-title">{data.name}</div>
                  <div className="admin-sub">ID: {id} • {data.address}</div>
                </div>
                <Link className="btn btn--dark btn--pill" to="/dashboard">
                  Back
                </Link>
              </div>

              <div className="status-grid" style={{ marginTop: 10 }}>
                <div className="status-card">
                  <div className="status-card__label">Free</div>
                  <div className="status-card__num">{data.free}</div>
                </div>
                <div className="status-card">
                  <div className="status-card__label">Occupied</div>
                  <div className="status-card__num">{data.occupied}</div>
                </div>
              </div>

              <div className="admin-hint" style={{ marginTop: 16 }}>
                Later: connect backend API and show real-time availability + logs.
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}