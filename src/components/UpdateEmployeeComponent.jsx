import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";
import { Link } from "react-router-dom";

export default class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      email: "",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    // this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    const id = this.state.id.parseLong;
    EmployeeService.getEmployeeById(id).then((res) => {
      let employee = res.data;
      this.setState({ name: employee.name }, { email: employee.email });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    //数据传给后端
    let employee = { name: this.state.name, email: this.state.email };
    // JSON.stringify 用来将值或者对象转化为JSON数据

    console.log("employee =>" + JSON.stringify(employee));
    console.log("id =>" + JSON.stringify(this.state.id));
    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Employee Name:</label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control "
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Employee Email:</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <br />
                  <br />
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Update
                  </button>
                  <span> </span>
                  <Link to={`/`}>
                    <button className="btn btn-danger">Cancel</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
