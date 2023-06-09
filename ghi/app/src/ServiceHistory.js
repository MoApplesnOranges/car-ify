import React, { useState } from "react";

function HistoryOfService(props) {
  props.appointments.sort(
    (a, b) => new Date(a.date_time) - new Date(b.date_time)
  );

  let [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [vinFilter, setVinFilter] = useState([]);

  const searchBar = async (event) => {
    event.preventDefault();
    setIsSearch((isSearch = true));
    if (isSearch) {
      const filterAppointments = props.appointments.filter(
        (appointment) => appointment.vin === searchInput
      );
      setVinFilter(filterAppointments);
    }
  };

  const handleChange = async (event) => {
    // event.preventDefault();
    const value = event.target.value;
    setSearchInput(value);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Service History</h1>
          <form onSubmit={searchBar} id="search-bar">
            <input
              name="search"
              type="search"
              placeholder="Seach by VIN..."
              onChange={handleChange}
              value={searchInput}
            />
            <button className="btn btn-primary">Search</button>
          </form>
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {isSearch
                ? vinFilter.map((appointment) => {
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

                    return (
                      <tr key={appointment.vin} id="appointment-row">
                        <td>{appointment.vin}</td>
                        <td>{vip}</td>
                        <td>{appointment.customer}</td>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{appointment.technician}</td>
                        <td>{appointment.reason}</td>
                        <td>{appointment.status}</td>
                      </tr>
                    );
                  })
                : props.appointments.map((appointment) => {
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

                    return (
                      <tr key={appointment.vin} id="appointment-row">
                        <td>{appointment.vin}</td>
                        <td>{vip}</td>
                        <td>{appointment.customer}</td>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{appointment.technician}</td>
                        <td>{appointment.reason}</td>
                        <td>{appointment.status}</td>
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

export default HistoryOfService;
