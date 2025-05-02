package com.example.demo.repository;

import com.example.demo.entity.Task;
import com.example.demo.enums.Priority;
import com.example.demo.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    // Find all tasks by status
    List<Task> findByStatus(Status status);
    List<Task> findByTitleContainingIgnoreCase(String title);
}
