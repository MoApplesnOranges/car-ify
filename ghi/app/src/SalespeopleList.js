function SalespeopleList(props) {
    function refreshSalespeople() {
        window.location.reload(false);
    }

    async function deleteModel(id) {
        const salespeopleURL = `http://localhost:8090/api/salespeople/${id}`;
        const fetchConfig = {
            method: 'DELETE',
        };
        const response = await fetch(salespeopleURL, fetchConfig);
        if (response.ok) {
            refreshSalespeople();
        }
    }

    // const tableStyle = {
    //     borderBottom: '2px solid black',
    // };

    return (
        <div>
        <h1>Salespeople</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.salespeople && props.salespeople.map(salesperson => {
                        return (
                            <tr key={salesperson.id}>
                                <td>{ salesperson.employee_id }</td>
                                <td>{ salesperson.first_name }</td>
                                <td>{ salesperson.last_name }</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => {deleteModel(salesperson.id)}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SalespeopleList;
