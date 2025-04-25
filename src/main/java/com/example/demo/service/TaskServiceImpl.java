package com.example.demo.service;

import com.example.demo.entity.Task;
import com.example.demo.enums.Priority;
import com.example.demo.enums.Status;
import com.example.demo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getAlltasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task createtask(Task task) {
        // Enum validation
        validateStatus(task.getStatus());
        validatePriority(task.getPriority());

        return taskRepository.save(task);
    }

    @Override
    public Task gettaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    @Override
    public boolean deletetask(Long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Task updatetask(Long id, Task taskDetails) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();

            validateStatus(taskDetails.getStatus());
            validatePriority(taskDetails.getPriority());

            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setStatus(taskDetails.getStatus());
            task.setPriority(taskDetails.getPriority());

            return taskRepository.save(task);
        }
        return null;
    }

    @Override
    public Task updateStatus(Long id, String statusStr) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Status status = parseStatus(statusStr);
            Task task = optionalTask.get();
            task.setStatus(status);
            return taskRepository.save(task);
        }
        return null;
    }

    @Override
    public List<Task> getTasksByPriority(int level) {
        Priority priority = Priority.fromLevel(level); // Will throw if invalid
        return taskRepository.findByPriority(priority);
    }

    // 🛡️ Helper methods
    private void validateStatus(Status status) {
        if (status == null) {
            throw new IllegalArgumentException("Invalid status value");
        }
    }

    private void validatePriority(Priority priority) {
        if (priority == null) {
            throw new IllegalArgumentException("Invalid priority level");
        }
    }

    private Status parseStatus(String statusStr) {
        try {
            return Status.valueOf(statusStr.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid status: " + statusStr);
        }
    }
}
