import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {installPackage} from "@angular/cli/utilities/install-package";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
