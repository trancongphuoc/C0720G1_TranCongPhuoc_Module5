package com.codegym.service;

import com.codegym.entity.Student;

import java.util.List;

public interface StudentService {
    List<Student> findAll();

    void save(Student body);

    void delete(Long id);
}
