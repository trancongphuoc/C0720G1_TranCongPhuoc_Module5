package com.codegym.rest_controller;


import com.codegym.entity.Student;
import com.codegym.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api-student")
@CrossOrigin(value = "*", allowedHeaders = "*")
public class StudentRestController {

    @Autowired
    private StudentService studentService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<Student>> getListStudent() {
        List<Student> studentList = studentService.findAll();

        if (studentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(studentList, HttpStatus.OK);
    }


    //    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/create")
    public ResponseEntity<Void> createNewStudent(@RequestBody Student body) {
        studentService.save(body);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        studentService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<Void> updateStudent(@RequestBody Student student) {
        studentService.save(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
