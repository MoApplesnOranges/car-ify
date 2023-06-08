import React, { useEffect, useState } from "react";

function CreateTechnician() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = formData.firstName;
    data.last_name = formData.lastName;
    data.employee_id = formData.employeeId;

    const locationUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newTechnician = await response.json();
      setFormData({
        firstName: "",
        lastName: "",
        employeeId: "",
      });
      //   setName("");
      //   setRoom("");
      //   setCity("");
      //   setState("");
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    employeeId: "",
  });
  const handleFormStateChange = async (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Technician</h1>
          <form onSubmit={handleSubmit} id="create-newTechnician-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="First-Name"
                value={formData.firstName}
                required
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
              />
              <label htmlFor="firstName">First name...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="Last-Name"
                value={formData.lastName}
                required
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
              />
              <label htmlFor="lastName">Last name...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="Employee-ID"
                value={formData.employeeId}
                required
                type="text"
                name="employeeId"
                id="employeeId"
                className="form-control"
              />
              <label htmlFor="employeeId">Employee ID...</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTechnician;
