import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/index/employees";

// axios 估计是用来进行前后端传输数据用的
// Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。主要用于向后台发送请求。
class EmployeeService {
  getEmployees() {
    //从数据库中获取数据
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
  // 将页面的数据传输给后端
  addEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  }
  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
