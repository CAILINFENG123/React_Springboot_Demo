import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Link from "react-router-dom/Link";

export const AddEmployeeComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const { id } = useParams();

  // const jump()=>{
  //   return <a href="/employees"></a>
  // }
  const addOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { name, email };
    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          alert("提交成功");
        })
        .catch((error) => {
          alert("提交失败");
          console.log(error);
        });
    } else {
      if ((employee.name === "") | (employee.email === "")) {
        alert("please type something");
      } else {
        EmployeeService.addEmployee(employee)
          .then((response) => {
            console.log(response.data);
            alert("添加成功");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  // const addEmployee = (e) => {
  //   e.preventDefault();
  //   const employee = { name, email };
  //   if ((employee.name === "") | (employee.email === "")) {
  //     alert("please type something");
  //   } else {
  //     EmployeeService.addEmployee(employee)
  //       .then((response) => {
  //         console.log(response.data);
  //         alert("添加成功");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  // const cancel = () => {
  //   name = "";
  //   email = "";
  // };
  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else return <h2 className="text-center">Add Employee</h2>;
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Employee Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="form-control "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group mb-2">
                  <label className="form-label">Employee Email:</label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <button
                  className="btn btn-success"
                  onClick={(e) => addOrUpdateEmployee(e)}
                >
                  Submit
                </button>

                <a
                  href="/employees"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;

// export default class AddEmployeeComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//     };
//     this.changeEmailHandler = this.changeEmailHandler.bind(this);
//     this.changeNameHandler = this.changeNameHandler.bind(this);
//     this.addEmployee = this.addEmployee.bind(this);
//     this.cancel = this.cancel.bind(this);
//   }

//   changeNameHandler = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   changeEmailHandler = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   addEmployee = (e) => {
//     e.preventDefault();
//     // 将网页中name和email的数据封装到employee对象中 转换为json数据并通过EmployeeService的axios来将
//     //数据传给后端
//     let employee = { name: this.state.name, email: this.state.email };
//     // JSON.stringify 用来将值或者对象转化为JSON数据
//     if ((employee.name !== "") & (employee.email !== "")) {
//       console.log("employee =>" + JSON.stringify(employee));
//       EmployeeService.addEmployee(employee);
//       this.setState({ name: "", email: "" });
//     } else {
//       alert("please type something in it");
//     }
//   };
//   cancel() {
//     this.setState({ name: "", email: "" });
//   }

//   // cancel() {}

//   render() {
// return (
//   <div>
//     <br />
//     <div className="container">
//       <div className="row">
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <h3 className="text-center">Add Employee</h3>
//           <div className="card-body">
//             <form>
//               <div className="form-group">
//                 <label>Employee Name:</label>
//                 <input
//                   placeholder="Name"
//                   name="name"
//                   className="form-control "
//                   value={this.state.name}
//                   onChange={this.changeNameHandler}
//                 />
//               </div>
//               <br />
//               <div className="form-group">
//                 <label>Employee Email:</label>
//                 <input
//                   placeholder="Email"
//                   name="email"
//                   className="form-control"
//                   value={this.state.email}
//                   onChange={this.changeEmailHandler}
//                 />
//               </div>
//               <br />
//               <br />
//               <button
//                 className="btn btn-success"
//                 onClick={this.addEmployee}
//               >
//                 Add
//               </button>

//               <button
//                 className="btn btn-danger"
//                 style={{ marginLeft: "10px" }}
//                 onClick={this.cancel}
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
//   }
// }
