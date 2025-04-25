package com.example.demo.controller;

import com.example.demo.ApiResponse;
import com.example.demo.entity.Task;
import com.example.demo.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Task>>> getAllTasks() {
        List<Task> tasks = taskService.getAlltasks();
        return ResponseEntity.ok(new ApiResponse<>("All tasks fetched successfully", tasks));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Task>> createTask(@Valid @RequestBody Task task) {
        Task createdTask = taskService.createtask(task);
        return new ResponseEntity<>(new ApiResponse<>("Task added successfully", createdTask), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Task>> updateTask(@PathVariable Long id, @Valid @RequestBody Task taskDetails) {
        Task updatedTask = taskService.updatetask(id, taskDetails);
        if (updatedTask != null) {
            return ResponseEntity.ok(new ApiResponse<>("Task updated successfully", updatedTask));
        }
        return new ResponseEntity<>(new ApiResponse<>("Task not found", null), HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Task>> getTaskById(@PathVariable Long id) {
        Task task = taskService.gettaskById(id);
        if (task != null) {
            return ResponseEntity.ok(new ApiResponse<>("Task retrieved", task));
        }
        return new ResponseEntity<>(new ApiResponse<>("Task not found", null), HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteTask(@PathVariable Long id) {
        boolean deleted = taskService.deletetask(id);
        if (deleted) {
            return new ResponseEntity<>(new ApiResponse<>("Task deleted successfully", null), HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(new ApiResponse<>("Task not found", null), HttpStatus.NOT_FOUND);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<Task>> updateTaskStatus(@PathVariable Long id, @RequestBody String status) {
        Task updatedTask = taskService.updateStatus(id, status);
        if (updatedTask != null) {
            return ResponseEntity.ok(new ApiResponse<>("Task status updated successfully", updatedTask));
        }
        return new ResponseEntity<>(new ApiResponse<>("Task not found", null), HttpStatus.NOT_FOUND);
    }

    @GetMapping("/priority/{level}")
    public ResponseEntity<ApiResponse<List<Task>>> getTasksByPriority(@PathVariable int level) {
        List<Task> tasks = taskService.getTasksByPriority(level);
        return ResponseEntity.ok(new ApiResponse<>("Tasks fetched by priority", tasks));
    }
}
