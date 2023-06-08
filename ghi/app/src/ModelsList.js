function ModelsList(props) {
    function refreshModels() {
        window.location.reload(false);
    }

    async function deleteModel(id) {
        const modelURL = `http://localhost:8100/api/models/${id}`;
        const fetchConfig = {
            method: 'DELETE',
        };
        const response = await fetch(modelURL, fetchConfig);
        if (response.ok) {
            refreshModels();
        }
    }

    // const tableStyle = {
    //     borderBottom: '2px solid black',
    // };

    return (
        <div>
        <h1>Models</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.models && props.models.map(model => {
                return (
                    <tr key={model.id}>
                        <td>{ model.name }</td>
                        <td>{ model.manufacturer.name }</td>
                        <td><img src={ model.picture_url } height="100" width="150"/></td>
                        <td><button className="btn btn-danger" onClick={() => {deleteModel(model.id)}}>Delete</button></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
        </div>
    );
}

export default ModelsList;
