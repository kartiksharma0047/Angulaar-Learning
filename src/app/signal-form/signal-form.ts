import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals'

@Component({
  selector: 'app-signal-form',
  imports: [],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

  employeeModel=signal({
    empName:'',
    empCity:'',
    empState:''
  })

  employeeForm=form()

}