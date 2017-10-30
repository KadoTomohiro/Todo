import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputViewmodelService} from "./input-viewmodel.service";

@Component({
  selector: 'td-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit,OnDestroy {

  form: FormGroup;

  constructor(private vm: InputViewmodelService) {
    this.form = this.vm.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.vm.submitNewTask(this.newTaskValue());
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.vm.storeNewTask(this.newTaskValue());
  }

  private newTaskValue(): string {
    return this.form.value.newTaskValue;
  }

}
