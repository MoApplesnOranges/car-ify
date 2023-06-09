import React, { useEffect, useState, } from 'react';

function SalesForm() {
    const [autos, setAutos] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState('');
    const [auto, setAuto] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');


    const handlePriceChange = (event) => {
        const value = event.target.value;
        console.log('Price', value);
        setPrice(value);
    }
    const handleAutoChange = (event) => {
        const value = event.target.value;
        console.log('Auto', value);
        setAuto(value);
    }
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        console.log('Salesperson', value);
        setSalesperson(value);
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        console.log('Customer', value);
        setCustomer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
          price,
          vin: auto,
          salesperson,
          customer
        };

        console.log(data)

        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        try {
          const response = await fetch(saleUrl, fetchConfig);
          if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`POST request failed: ${errorData}`);
          }
            const newSale = await response.json();
            console.log(newSale);

            const autoUrl = `http://localhost:8100/api/automobiles/${auto}/`;
            const autoFetchConfig = {
              method: "PUT",
              body: JSON.stringify({sold: true}),
              headers: {
                'Content-Type': 'application/json'
              },
            };
            const autoResponse = await fetch(autoUrl, autoFetchConfig);
            if (!autoResponse.ok) {
              throw new Error('Error updating auto status');
            }

            fetchData();

            setPrice('');
            setAuto('');
            setSalesperson('');
            setCustomer('');
        } catch (error) {
          console.error('Error', error.message);
        }
    };

  const fetchData = async () => {
    const autoUrl = 'http://localhost:8090/api/unsold_automobiles/';
    const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
    const customerUrl = 'http://localhost:8090/api/customers/';

    const autoResponse = await fetch(autoUrl);
    console.log('autoResponse', autoResponse);
    const salespeopleResponse = await fetch(salespeopleUrl);
    console.log('salespeopleResponse', salespeopleResponse);
    const customerResponse = await fetch(customerUrl);
    console.log('customerResponse', customerResponse);

    if (autoResponse.ok && salespeopleResponse.ok && customerResponse.ok) {
      const autoData = await autoResponse.json();
      const salespeopleData = await salespeopleResponse.json();
      const customerData = await customerResponse.json();

      setAutos(autoData.autos);
      setSalespeople(salespeopleData.salespeople);
      setCustomers(customerData.customers);
    }
  }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-model-form">
              <div className="mb-3">
                <select value={auto} onChange={handleAutoChange} required id="autos" name="autos" className="form-select">
                  <option value="">Automobile VIN</option>
                  {autos.map(auto => {
                    return (
                        <option key={auto.id} value={auto.vin}>
                            {auto.vin}
                        </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select value={salesperson} onChange={handleSalespersonChange} required id="salesperson" name="salesperson" className="form-select">
                  <option value="">Choose a salesperson</option>
                  {salespeople.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name} {salesperson.last_name}
                        </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select value={customer} onChange={handleCustomerChange} required id="customer" name="customer" className="form-select">
                  <option value="">Choose a customer</option>
                  {customers.map(customer => {
                    return (
                        <option key={customer.id} value={customer.id}>
                            {customer.first_name} {customer.last_name}
                        </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input value={price} onChange={handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control"/>
                <label htmlFor="model">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SalesForm;
