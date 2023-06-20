import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadData() {
  const manufacturerResponse = await fetch(
    "http://localhost:8100/api/manufacturers/"
  );
  if (!manufacturerResponse.ok) throw new Error("Manufacturers fetch failed");
  const manufacturerData = await manufacturerResponse.json();

  const technicianResponse = await fetch(
    "http://localhost:8080/api/technicians/"
  );
  if (!technicianResponse.ok) throw new Error("Technicians fetch failed");
  const technicianData = await technicianResponse.json();

  const appointmentsResponse = await fetch(
    "http://localhost:8080/api/appointments/"
  );
  if (!appointmentsResponse.ok) throw new Error("Appointments fetch failed");
  const appointmentData = await appointmentsResponse.json();

  const modelsResponse = await fetch("http://localhost:8100/api/models/");
  if (!modelsResponse.ok) throw new Error("Models fetch failed");
  const modelsData = await modelsResponse.json();

  const automobileResponse = await fetch(
    "http://localhost:8100/api/automobiles/"
  );
  if (!automobileResponse.ok) throw new Error("Autos fetch failed");
  const automobilesData = await automobileResponse.json();

  const customersResponse = await fetch("http://localhost:8090/api/customers/");
  if (!customersResponse.ok) throw new Error("Customers fetch failed");
  const customersData = await customersResponse.json();

  const salespeopleResponse = await fetch(
    "http://localhost:8090/api/salespeople/"
  );
  if (!salespeopleResponse.ok) throw new Error("Salespeople fetch failed");
  const salespeopleData = await salespeopleResponse.json();

  const salesResponse = await fetch("http://localhost:8090/api/sales/");
  if (!salesResponse.ok) throw new Error("Sales fetch failed");
  const salesData = await salesResponse.json();

  root.render(
    <React.StrictMode>
      <App
        manufacturers={manufacturerData.manufacturers}
        technicians={technicianData.Technicians}
        appointments={appointmentData.Appointments}
        models={modelsData.models}
        automobiles={automobilesData.autos}
        customers={customersData.customers}
        salespeople={salespeopleData.salespeople}
        sales={salesData.sales}
      />
    </React.StrictMode>
  );
}

loadData();
