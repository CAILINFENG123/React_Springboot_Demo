import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

export const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List Employess</h2>

      <div className="row">
        <table className="table table-active table-bordered table-hover ">
          <thead>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>
                  <a
                    className="btn btn-info"
                    href={`/update-employee/${employee.id}`}
                  >
                    Update
                  </a>

                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
