import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  // OnToggle

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.TodoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

  // OnDelete

  onDelete(todo) {
    console.log('toggle');
  }

}
