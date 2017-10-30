import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import {InputViewmodelService} from "./input/input-viewmodel.service";

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule
  ],
  declarations: [TodoListComponent, ListComponent, InputComponent],
  providers: [InputViewmodelService]

})
export class TodoListModule { }
