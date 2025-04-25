package com.example.demo.service;

import com.example.demo.entity.Task;
import java.util.List;

public interface TaskService {

    List<Task> getAlltasks();

    Task createtask(Task task);

    Task gettaskById(Long id);

    boolean deletetask(Long id);

    Task updatetask(Long id, Task taskDetails);

    Task updateStatus(Long id, String statusStr);

    List<Task> getTasksByPriority(int level);
}
