import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./ManufacturerList";
import CreateManufacturer from "./ManufacturerCreate";
import AutomobileList from "./AutomobileList";
import CreateTechnician from "./CreateTech";
import TechList from "./TechnicianList";
import CreateServiceAppointment from "./ServiceForm";
import AppointmentList from "./ListAppointments";
import ModelsList from "./ModelsList";
import ModelForm from "./ModelForm";
import AutomobileForm from "./AutomobileForm";
import CustomerList from "./CustomerList";
import CustomerForm from "./CustomerForm";
import SalespeopleList from "./SalespeopleList";
import SalespersonForm from "./SalespersonForm";
import SalesList from "./SalesList";
import SalesForm from "./SalesForm";
import SalespersonHistory from "./SalespersonHistory";
import HistoryOfService from "./ServiceHistory";

function App(props) {
  if (
    props.manufacturers === undefined &&
    props.automobiles === undefined &&
    props.technicians === undefined &&
    props.appointments === undefined
  ) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      {/* <div className="container"> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="manufacturers"
          index
          element={<ManufacturerList manufacturers={props.manufacturers} />}
        />
        <Route path="manufacturers/create" element={<CreateManufacturer />} />
        <Route
          path="automobiles"
          // index
          element={<AutomobileList automobiles={props.automobiles} />}
        />
        <Route path="technicians/create" element={<CreateTechnician />} />
        <Route
          path="technicians"
          element={<TechList technicians={props.technicians} />}
        />
        <Route
          path="appointments/create"
          element={<CreateServiceAppointment />}
        />
        <Route
          path="appointments"
          element={
            <AppointmentList
              appointments={props.appointments}
              automobiles={props.automobiles}
            />
          }
        />
        <Route path="/models" element={<ModelsList models={props.models} />} />
        <Route path="/models/new" element={<ModelForm />} />
        <Route path="/automobiles/new" element={<AutomobileForm />} />
        <Route
          path="/salespeople"
          element={<SalespeopleList salespeople={props.salespeople} />}
        />
        <Route path="/salespeople/new" element={<SalespersonForm />} />
        <Route path="/sales/history" element={<SalespersonHistory />} />
        <Route
          path="/customers"
          element={<CustomerList customers={props.customers} />}
        />
        <Route path="/customers/new" element={<CustomerForm />} />
        <Route path="/sales" element={<SalesList sales={props.sales} />} />
        <Route path="/sales/new" element={<SalesForm />} />
        <Route
          path="appointments/history"
          element={
            <HistoryOfService
              appointments={props.appointments}
              automobiles={props.automobiles}
            />
          }
        />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
