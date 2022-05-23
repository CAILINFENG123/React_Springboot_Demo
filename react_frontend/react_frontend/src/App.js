import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import { ListEmployees } from "./components/ListEmployees";
import AddEmployeeComponent from "./components/AddEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            {/* Routes组件查看它所有的子路由，并显示第一个路径与当前URL匹配的路由 */}
            {/* 用于网页间的跳转 */}
            <Route exact path="/" component={ListEmployees}></Route>
            <Route path="/employees" component={ListEmployees}></Route>
            <Route
              path="/add-employee"
              component={AddEmployeeComponent}
            ></Route>
            <Route
              path="/update-employee/:id"
              component={AddEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
    // // Routert
    // //它支持在React Application中不同组件的视图之间导航，
    // //允许更改浏览器URL，并保持UI与URL同步。
    // <div>
    //   <Router>
    //     <HeaderComponent />
    //     <div className="container">
    //       {/* Routes组件查看它所有的子路由，并显示第一个路径与当前URL匹配的路由 */}
    //       {/* 用于网页间的跳转 */}
    //       <Switch>
    //         <Route path="/" exact component={ListEmployees}></Route>
    //         <Route path="/employees" component={ListEmployees}></Route>
    //         <Route
    //           path="/add-employee"
    //           component={AddEmployeeComponent}
    //         ></Route>
    //         <Route
    //           path="/update-employee/:id"
    //           component={UpdateEmployeeComponent}
    //         ></Route>
    //       </Switch>
    //     </div>
    //     <FooterComponent />
    //   </Router>
    // </div>
  );
}

export default App;
