package com.example.springboot_backend.controller;

import com.example.springboot_backend.exception.ResourceNotFoundException;
import com.example.springboot_backend.model.Employee;
import com.example.springboot_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = {"http://localhost:3000"})
//@Controller是Spring中将class标记为Controller 类的注释
// @Controller注释表示一个特定的类充当控制器的角色。不需要扩展任何控制器基类或引用Servlet API
//@ResponseBody注释告诉controller，返回的对象被自动序列化为JSON，并返回给HttpResponse对象
// 而@RestController用于REST Web服务中，类似于@Controller和@ResponseBody。
@RestController
//@RequestMapping用于类级别，而@GetMapping用于连接方法。
//@RequestMapping是Spring MVC中最常见、使用最广泛的注释。它用于将web请求映射到特定的处理程序类和/或处理程序方法。
@RequestMapping("/index")
//表现层
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
//    @GetMapping用于连接方法
//    @GetMapping注释将HTTP GET请求映射到特定的处理程序方法。
//    它是一个组合注释，充当@RequestMapping(method = RequestMethod)
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //add a new employee
//    它作为@RequestMapping(method = RequestMethod)
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    //get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist for ID:" + id));
        //ResponseEntity represents an HTTP response, including headers, body, and status.
        return ResponseEntity.ok(employee);
    }

    //update employee rest api
//    @RequestBody主要用来接收前端传递给后端的json字符串中的数据的(请求体中的数据的),所以只能发送POST请求。
//PUT HTTP方法用于更新资源和@PutMapping注释，以便将HTTP PUT请求映射到特定的处理程序方法。
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist for ID:" + id));

        updateEmployee.setName(employeeDetails.getName());
        updateEmployee.setEmail(employeeDetails.getEmail());

        employeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist for ID:" + id));
        employeeRepository.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
