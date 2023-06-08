import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadData() {
  const modelsResponse = await fetch("http://localhost:8100/api/models/");
  if (!modelsResponse.ok) throw new Error('Models fetch failed');
  const modelsData = await modelsResponse.json();
  const automobileResponse = await fetch("http://localhost:8100/api/automobiles/");
  if (!automobileResponse.ok) throw new Error('Autos fetch failed');
  const automobilesData = await automobileResponse.json();
  const customersResponse = await fetch("http://localhost:8090/api/customers/");
  if (!customersResponse.ok) throw new Error('Customers fetch failed');
  const customersData = await customersResponse.json();
  const salespeopleResponse = await fetch("http://localhost:8090/api/salespeople/");
  if (!salespeopleResponse.ok) throw new Error('Salespeople fetch failed');
  const salespeopleData = await salespeopleResponse.json();
  const salesResponse = await fetch("http://localhost:8090/api/sales/");
  if (!salesResponse.ok) throw new Error('Sales fetch failed');
  const salesData = await salesResponse.json();
  console.log(salesData)

  console.log('Salespeople response', salespeopleData);

  // if (modelsData.ok && automobilesData.ok && customersData.ok && salespeopleData.ok) {
    root.render(
      <React.StrictMode>
        <App
          models={modelsData.models}
          automobiles={automobilesData.automobiles}
          customers={customersData.customers}
          salespeople={salespeopleData.salespeople}
          sales={salesData.sales}
        />
      </React.StrictMode>
    );
}
  //   } else {
  //     console.error("Some responses were not ok");
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
// }
loadData();

// async function loadModels() {
//   const response = await fetch("http://localhost:8100/api/models");
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App models={data.models} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadModels();

// async function loadAutomobiles() {
//   const response = await fetch("http://localhost:8100/api/automobiles");
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App loadAutomobiles={data.models} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadAutomobiles();
