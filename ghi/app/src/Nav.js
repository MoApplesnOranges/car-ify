<<<<<<< HEAD
import "./index.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import React from "react";
import { Dropdown } from "react-bootstrap";
=======
import { Link, NavLink, Navigate } from "react-router-dom";
import "./index.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
>>>>>>> 8af861b187460d488b839cb2887d6e107daac297

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqNx3IE9hBOozWSCy-aBDCXAZAkvKv2KbexAiTG_iGw&usqp=CAU&ec=48665701"
            alt=""
            width="100"
            height="75"
          />
<<<<<<< HEAD
          <div id="main">Home</div>
=======
          <div id="main">CarCar</div>
>>>>>>> 8af861b187460d488b839cb2887d6e107daac297
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row">
<<<<<<< HEAD
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> */}
=======
>>>>>>> 8af861b187460d488b839cb2887d6e107daac297
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-inventory">
                    Inventory
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="manufacturers">
                      Manufacturers
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="manufacturers/create">
                      Create a Manufacturer
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/models">
                      Models
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/models/new">
                      Create a Model
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="automobiles">
                      Automobiles
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/automobiles/new">
                      Create an Automobile
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="navbar-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-sales">
                    Sales
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/salespeople">
                      Salespeople
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/salespeople/new">
                      Add a Salesperson
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/customers">
                      Customers
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/customers/new">
                      Add a Customer
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/sales">
                      Sales
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/sales/new">
                      Add a Sale
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/sales/history">
                      Salesperson History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="navbar-item">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-service">
                    Service
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="technicians">
                      Technicians
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="technicians/create">
                      Add a Technician
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="appointments">
                      Service Appointments
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="appointments/create">
                      Create a Service Appointment
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="appointments/history">
                      Service History
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
<<<<<<< HEAD
            {/* <NavLink
=======
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            {/* <li className="nav-item">
                <NavLink
>>>>>>> 8af861b187460d488b839cb2887d6e107daac297
                  className="nav-link active"
                  aria-current="page"
                  to="manufacturers"
                >
                  Manufacturers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="manufacturers/create"
                >
                  Create a manufacturer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="model-list"
                  aria-current="page"
                  to="/models"
                >
                  Models
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/models/new">
                  Create a Model
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="automobiles"
                >
                  Automobiles
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/automobiles/new">
                  Create an Automobile
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="automobile-list"
                  aria-current="page"
                  to="/salespeople"
                >
                  Salespeople
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/salespeople/new">
                  Add a Salesperson
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="customer-list"
                  aria-current="page"
                  to="/customers"
                >
                  Customers
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/customers/new">
                  Add a Customer
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="sales-list"
                  aria-current="page"
                  to="/sales"
                >
                  Sales
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/sales/new">
                  Add a Sale
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/sales/history">
                  Salesperson History
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="technicians"
                >
                  Technicians
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="technicians/create"
                >
                  Add a Technician
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="appointments"
                >
                  Service Appointments
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="appointments/create"
                >
                  Create a Service Appointment
                </NavLink>
              </li> */}
            {/* <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="appointments/history"
                >
                  Service History
                </NavLink>
<<<<<<< HEAD
              </li>
            </ul> */}
=======
              </li> */}
            {/* </ul> */}
>>>>>>> 8af861b187460d488b839cb2887d6e107daac297
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
