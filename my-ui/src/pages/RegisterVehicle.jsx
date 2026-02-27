import { useState } from "react";
import logo from "../assets/images/logo1.png"; 
import Header from "../components/Header";

export default function RegisterVehicle() {
  const [vehicles, setVehicles] = useState([
    { plate: "", brand: "", color: "" },
  ]);

  function updateVehicle(index, field, value) {
    setVehicles((prev) =>
      prev.map((v, i) => (i === index ? { ...v, [field]: value } : v))
    );
  }

  function addVehicle() {
    setVehicles((prev) => [...prev, { plate: "", brand: "", color: "" }]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // пока UI-only (потом подключим backend)
    console.log("Vehicles:", vehicles);

    // минимальная проверка: хотя бы plate у первой машины
    if (!vehicles[0].plate.trim()) {
      alert("Please enter at least one plate number.");
      return;
    }

    alert("Vehicle(s) registered (UI only). Later we will connect backend.");
  }

  return (
    <div>
      <Header />

      <section className="section section--light">
        <div className="container">
          <h2 className="section__title dark reveal is-visible">
            Register your Vehicle
          </h2>

          <div className="vehicle-card reveal is-visible">
            <form className="vehicle-form" onSubmit={handleSubmit}>
              {vehicles.map((v, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    display: "grid",
                    gap: 14,
                    justifyItems: "center",
                  }}
                >
                  <label className="full">
                    <span>Plate Number</span>
                    <input
                      type="text"
                      value={v.plate}
                      onChange={(e) =>
                        updateVehicle(index, "plate", e.target.value)
                      }
                      placeholder="10-AA-123"
                      required={index === 0}
                    />
                  </label>

                  <div className="vehicle-row">
                    <label>
                      <span>Brand</span>
                      <input
                        type="text"
                        value={v.brand}
                        onChange={(e) =>
                          updateVehicle(index, "brand", e.target.value)
                        }
                        placeholder="Toyota"
                      />
                    </label>

                    <label>
                      <span>Color</span>
                      <input
                        type="text"
                        value={v.color}
                        onChange={(e) =>
                          updateVehicle(index, "color", e.target.value)
                        }
                        placeholder="Black"
                      />
                    </label>
                  </div>

                  {index !== vehicles.length - 1 && (
                    <div
                      style={{
                        width: "100%",
                        maxWidth: 520,
                        height: 1,
                        background: "rgba(255,255,255,.25)",
                        margin: "6px 0",
                      }}
                    />
                  )}
                </div>
              ))}

              <button className="link-btn" type="button" onClick={addVehicle}>
                + Add another vehicle
              </button>

              <button className="btn btn--pill btn--dark" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}