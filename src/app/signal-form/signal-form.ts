import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form } from '@angular/forms/signals'

@Component({
  selector: 'app-signal-form',
  imports: [],
  templateUrl: './signal-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './signal-form.css',
})
export class SignalForm {

  employeeModel=signal({
    empName:'',
    empCity:'',
    empState:''
  })

  employeeForm=form(this.employeeModel)

}