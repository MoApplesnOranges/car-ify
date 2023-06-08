import React from "react";

function AppointmentList(props) {
  const cancelAppt = async (event, appointment) => {
    event.preventDefault();

    const locationUrl = `http://localhost:8080/api/appointments/${appointment.id}/cancel`;
    const fetchConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      await response.json();
    }
  };

  const finishAppt = async (event, appointment) => {
    event.preventDefault();

    const locationUrl = `http://localhost:8080/api/appointments/${appointment.id}/finish`;
    const fetchConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      await response.json();
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Service Appointments</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>VIN</th>
                <th>Is VIP?</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {props.appointments.map((appointment) => {
                const dateTime = appointment.date_time;
                const dateFormal = new Date(dateTime);
                const date = dateFormal.toLocaleDateString("en-US");
                const time = dateFormal.toLocaleTimeString("en-US");

                const vipArray = [];
                props.automobiles.forEach((automobile) =>
                  vipArray.push(automobile.vin)
                );
                let vip = "No";
                if (vipArray.includes(appointment.vin)) {
                  vip = "Yes";
                }
                if (appointment.status === "CREATED") {
                  return (
                    <tr key={appointment.vin} id="appointment-row">
                      <td>{appointment.vin}</td>
                      <td>{vip}</td>
                      <td>{appointment.customer}</td>
                      <td>{date}</td>
                      <td>{time}</td>
                      <td>{appointment.technician}</td>
                      <td>{appointment.reason}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            cancelAppt(event, appointment);
                            window.location.reload();
                          }}
                          id="cancel-appointment"
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={(event) => {
                            finishAppt(event, appointment);
                            window.location.reload();
                          }}
                          id="finish-appointment"
                        >
                          Finish
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentList;
