import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule
  ],
  declarations: [TodoListComponent, ListComponent]
})
export class TodoListModule { }
