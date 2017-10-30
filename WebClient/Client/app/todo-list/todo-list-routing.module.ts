import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from "./todo-list.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [
      {path: '', redirectTo: 'todo', pathMatch: 'full'},
      {path: ':status', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule {
}
