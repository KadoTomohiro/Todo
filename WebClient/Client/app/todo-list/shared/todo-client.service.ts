import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';

@Injectable()
export class TodoClientService {

  constructor(private client: HttpClient) {
  }

  getAll(): Observable<Todo> {
    return this.client.get('api/todo/list');
  }

}
