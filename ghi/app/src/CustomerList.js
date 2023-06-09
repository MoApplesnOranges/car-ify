function CustomerList(props) {
    function refreshModels() {
        window.location.reload(false);
    }

    async function deleteModel(id) {
        const customerURL = `http://localhost:8090/api/customers/${id}/`;
        const fetchConfig = {
            method: 'DELETE',
        };
        const response = await fetch(customerURL, fetchConfig);
        if (response.ok) {
            refreshModels();
        }
    }

    return (
        <div>
        <h1>Customers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers && props.customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{ customer.first_name }</td>
                                <td>{ customer.last_name }</td>
                                <td>{ customer.address }</td>
                                <td>{ customer.phone_number }</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => {deleteModel(customer.id)}}>
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

export default CustomerList;
