import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelsList from './ModelsList';
import ModelForm from './ModelForm';
import AutomobileForm from './AutomobileForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalespeopleList from './SalespeopleList';
import SalespersonForm from './SalespersonForm';
import SalesList from './SalesList';
import SalesForm from './SalesForm';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/models" element={<ModelsList models={props.models} />} />
          <Route path="/models/new" element={<ModelForm />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="/salespeople" element={<SalespeopleList salespeople={props.salespeople} />} />
          <Route path="/salespeople/new" element={<SalespersonForm />} />
          <Route path="/customers" element={<CustomerList customers={props.customers} />} />
          <Route path="/customers/new" element={<CustomerForm />} />
          <Route path="/sales" element={<SalesList sales={props.sales} />} />
          <Route path="/sales/new" element={<SalesForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
