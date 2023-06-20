import React, { useEffect, useState } from "react";

function SalespersonHistory(props) {
  const [salespeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);
  const [salespersonId, setSalespersonId] = useState("");
  const [filteredSales, setFilteredSales] = useState([]);

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalespersonId(value);
  };

  const fetchData = async () => {
    const salesUrl = "http://localhost:8090/api/sales/";
    const salespeopleUrl = "http://localhost:8090/api/salespeople/";

    const salesResponse = await fetch(salesUrl);
    const salespeopleResponse = await fetch(salespeopleUrl);

    if (salesResponse.ok && salespeopleResponse.ok) {
      const salesData = await salesResponse.json();
      const salespeopleData = await salespeopleResponse.json();

      setSales(salesData.sales);
      setSalespeople(salespeopleData.salespeople);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (salespersonId !== "") {
      const filtered = sales.filter(
        (sale) => parseInt(sale.salesperson.id) === parseInt(salespersonId)
      );
      setFilteredSales(filtered);
    }
  }, [salespersonId, sales]);

  return (
    <div>
      <h1>Salesperson History</h1>
      <select
        value={salespersonId}
        onChange={handleSalespersonChange}
        required
        id="salesperson"
        name="salesperson"
        className="form-select"
      >
        <option value="">Choose a salesperson</option>
        {salespeople.map((salesperson) => {
          return (
            <option key={salesperson.id} value={salesperson.id}>
              {salesperson.first_name} {salesperson.last_name}
            </option>
          );
        })}
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>Vin</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SalespersonHistory;
