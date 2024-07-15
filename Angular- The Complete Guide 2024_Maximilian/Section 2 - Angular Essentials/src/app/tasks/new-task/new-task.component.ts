import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../../model/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    const newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();
  }
}
