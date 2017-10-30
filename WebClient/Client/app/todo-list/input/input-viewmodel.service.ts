import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable()
export class InputViewmodelService {


  constructor(private fb: FormBuilder) { }

  createForm(): FormGroup {
    return this.fb.group({
      newTask: ['', Validators.required ]
    });
  }

  submitNewTask(task: string) {
    // Todo サーバーに結果を送る処理
  }
}
