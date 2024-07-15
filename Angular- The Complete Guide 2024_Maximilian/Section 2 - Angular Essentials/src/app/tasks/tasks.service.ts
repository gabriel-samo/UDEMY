import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from '../../model/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    const newTaskId = 't' + (this.tasks.length + 1).toString();
    this.tasks.push({ ...newTask, id: newTaskId, userId: userId });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
