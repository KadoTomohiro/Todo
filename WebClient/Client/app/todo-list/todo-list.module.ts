import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import {InputViewmodelService} from './input/input-viewmodel.service';
import { TodoService } from './shared/todo.service';
import { TodoClientService } from './shared/todo-client.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoListComponent,
    ListComponent,
    InputComponent
  ],
  providers: [
    InputViewmodelService,
    TodoService,
    TodoClientService
  ]

})
export class TodoListModule { }
