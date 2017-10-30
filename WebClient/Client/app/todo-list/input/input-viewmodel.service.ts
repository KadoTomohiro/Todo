import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class InputViewmodelService {

  private _newTask: string;

  constructor(private fb: FormBuilder) { }

  createForm(): FormGroup {
    return this.fb.group({
      newTask: [this._newTask, Validators.required ]
    });
  }

  submitNewTask(task: string) {
    // Todo サーバーに結果を送って新しいリストを受け取る処理
    this._newTask = '';
  }

  storeNewTask(inputValue: string) {
    this._newTask = inputValue;
  }
}
