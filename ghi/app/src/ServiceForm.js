import React, { useEffect, useState } from "react";

function CreateServiceAppointment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.vin = formData.vin;
    data.customer = formData.customer;
    data.date_time = formData.dateTime;
    data.technician = formData.technician;
    data.reason = formData.reason;

    const locationUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newAppointment = await response.json();
      setFormData({
        vin: "",
        customer: "",
        dateTime: "",
        technician: "",
        reason: "",
      });
    }
  };
  const [formData, setFormData] = useState({
    vin: "",
    customer: "",
    dateTime: "",
    technician: "",
    reason: "",
  });
  const handleFormStateChange = async (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const [technicians, setTechnician] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnician(data.Technicians);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a Service Appointment</h1>
          <form onSubmit={handleSubmit} id="create-newAppointment-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="vin"
                value={formData.vin}
                required
                type="text"
                name="vin"
                id="vin"
                className="form-control"
              />
              <label htmlFor="vin">Automobile VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="customer"
                value={formData.customer}
                required
                type="text"
                name="customer"
                id="customer"
                className="form-control"
              />
              <label htmlFor="customer">Customer</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="dateTime"
                value={formData.dateTime}
                required
                type="datetime-local"
                name="dateTime"
                id="dateTime"
                className="form-control"
              />
              <label htmlFor="dateTime">Appointment Date & Time</label>
            </div>
            <div className="mb-3">
              <select
                required
                name="technician"
                onChange={handleFormStateChange}
                value={formData.technician}
                id="technician"
                className="form-select"
              >
                <option value="">Choose a technician...</option>
                {technicians.map((technician) => {
                  return (
                    <option
                      key={technician.employee_id}
                      value={`${technician.first_name} ${technician.last_name}`}
                    >
                      {`${technician.first_name} ${technician.last_name}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="reason"
                value={formData.reason}
                required
                type="text"
                name="reason"
                id="reason"
                className="form-control"
              />
              <label htmlFor="reason">Reason</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateServiceAppointment;
