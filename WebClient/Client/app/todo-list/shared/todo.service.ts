import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoClientService } from './todo-client.service';

@Injectable()
export class TodoService {

  private _todoList: Todo[];

  constructor(private client: TodoClientService) {
    this.client.getAll().subscribe(res => {
      res.
    });
  }

  private setList =

}
