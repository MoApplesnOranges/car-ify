import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadData() {
  const response = await fetch("http://localhost:8100/api/manufacturers/");
  const response2 = await fetch("http://localhost:8100/api/automobiles/");
  const response3 = await fetch("http://localhost:8080/api/technicians/");
  const response4 = await fetch("http://localhost:8080/api/appointments/");
  if (response.ok && response2.ok && response3.ok && response4.ok) {
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    root.render(
      <React.StrictMode>
        <App
          manufacturers={data.manufacturers}
          automobiles={data2.autos}
          technicians={data3.Technicians}
          appointments={data4.Appointments}
        />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }
}
loadData();
