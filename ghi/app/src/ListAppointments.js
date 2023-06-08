import React from "react";

function AppointmentList(props) {
  // const cancelAppt =

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
                console.log(props.automobiles);
                props.automobiles.forEach((automobile) =>
                  vipArray.push(automobile.vin)
                );
                let vip = "No";
                if (vipArray.includes(appointment.vin)) {
                  vip = "Yes";
                }

                return (
                  <tr key={appointment.vin}>
                    <td>{appointment.vin}</td>
                    <td>{vip}</td>
                    <td>{appointment.customer}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{appointment.technician}</td>
                    <td>{appointment.reason}</td>
                    <td>
                      <button className="btn btn-danger">Cancel</button>
                      <button className="btn btn-success">Finish</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentList;
