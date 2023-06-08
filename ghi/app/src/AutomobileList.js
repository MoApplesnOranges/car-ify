// import React from "react";

function AutomobileList(props) {
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Automobiles</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Sold</th>
              </tr>
            </thead>
            <tbody>
              {props.automobiles && props.automobiles.map((auto) => {
                console.log(props.automobiles)
                return (
                  <tr key={auto.vin}>
                    <td>{auto.vin}</td>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                    <td>{String(auto.sold)}</td>
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

export default AutomobileList;
