package com.example.demo.service;

import com.example.demo.entity.Task;
import com.example.demo.enums.Status;

import java.util.List;

public interface TaskService {

    List<Task> getAlltasks();

    Task createtask(Task task);

    Task gettaskById(Long id);

    boolean deletetask(Long id);

    Task updatetask(Long id, Task taskDetails);

    List<Task> getTaskByStatus(Status status);

    List<Task> searchTasksByTitle(String title);

}
