function SalesList(props) {
    function refreshSales() {
        window.location.reload(false);
    }

    async function deleteModel(id) {
        const saleURL = `http://localhost:8090/api/sales/${id}`;
        const fetchConfig = {
            method: 'DELETE',
        };
        const response = await fetch(saleURL, fetchConfig);
        if (response.ok) {
            refreshSales();
        }
    }

    // useEffect(() => {
    //     const fetchSales = async () => {
    //         const response = await fetch('http://localhost:8100/api/sales/')
    //         if (response.ok) {
    //             const data = await response.json();
    //             setSales(data);
    //         }
    //     }

    //     fetchSales();
    // }, []);

    // const tableStyle = {
    //     borderBottom: '2px solid black',
    // };

    return (
        <div>
        <h1>Models</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Salesperson Name</th>
                <th>Salesperson Employee ID</th>
                <th>Customer Name</th>
                <th>Automobile VIN</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.sales && props.sales.map(sale => {
                return (
                    <tr key={sale.id}>
                        <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                        <td>{ sale.salesperson.employee_id }</td>
                        <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                        <td>{ sale.automobile.vin }</td>
                        <td>{ sale.price }</td>
                        <td><button className="btn btn-danger" onClick={() => {deleteModel(sale.id)}}>Delete</button></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
        </div>
    );
}

export default SalesList;
