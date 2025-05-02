package com.example.demo.controller;

import com.example.demo.ApiResponse;
import com.example.demo.entity.Task;
import com.example.demo.enums.Status;
import com.example.demo.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Task>>> searchTasksByTitle(@RequestParam String title) {
        List<Task> tasks = taskService.searchTasksByTitle(title);
        if (tasks.isEmpty()) {
            return new ResponseEntity<>(new ApiResponse<>("No tasks found", null), HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(new ApiResponse<>("Tasks found", tasks));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Task>> createTask(@Valid @RequestBody Task task) {
        Task createdTask = taskService.createtask(task);
        return new ResponseEntity<>(new ApiResponse<>("Task added successfully", createdTask), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Task>>> getAllTasks() {
        List<Task> tasks = taskService.getAlltasks();
        return ResponseEntity.ok(new ApiResponse<>("All tasks fetched successfully", tasks));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Task>> getTaskById(@PathVariable Long id) {
        Task task = taskService.gettaskById(id);
        if (task != null) {
            return ResponseEntity.ok(new ApiResponse<>("Task retrieved", task));
        }
        return new ResponseEntity<>(new ApiResponse<>("Task not found", null), HttpStatus.NOT_FOUND);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<ApiResponse<List<Task>>> getTasksByStatus(@PathVariable String status) {
        try {
            Status enumStatus = Status.valueOf(status.toUpperCase()); // Convert string to enum
            List<Task> tasks = taskService.getTaskByStatus(enumStatus);
            if (tasks.isEmpty()) {
                return new ResponseEntity<>(new ApiResponse<>("No tasks found", null), HttpStatus.NOT_FOUND);
            }
            return ResponseEntity.ok(new ApiResponse<>("Tasks retrieved", tasks));
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(new ApiResponse<>("Invalid status value", null), HttpStatus.BAD_REQUEST);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Task>> updateTask(@PathVariable Long id, @Valid @RequestBody Task taskDetails) {
        Task updatedTask = taskService.updatetask(id, taskDetails);
        if (updatedTask != null) {
            return ResponseEntity.ok(new ApiResponse<>("Task updated successfully", updatedTask));
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

}
