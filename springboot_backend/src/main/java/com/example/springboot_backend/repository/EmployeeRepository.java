package com.example.springboot_backend.repository;

import com.example.springboot_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//dao层 数据访问层
//DAL:(数据访问层):与数据库打交道。主要实现对数据的增、删、改、查。
// 将存储在数据库中的数据提交给业务层，同时将业务层处理的数据保存到数据库。
// （当然这些操作都是基于UI层的。用户的需求反映给界面（UI），UI反映给BLL，BLL反映给DAL，DAL进行数据的操作，操作后再一一返回，直到将用户所需数据反馈给用户）

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
