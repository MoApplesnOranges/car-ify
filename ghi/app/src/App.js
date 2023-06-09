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
          index
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
