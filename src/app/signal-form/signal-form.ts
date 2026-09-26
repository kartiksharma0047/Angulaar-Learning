import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals'

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
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

  employeeForm=form(this.employeeModel,(schema)=>{
    required(schema.empName,{message:'Please Enter Name'}),
    minLength(schema.empName,5,{message:'Minimum 4 Characters are needed!'}),
    required(schema.empCity,{message:'Please Enter City'})
  })

  saveEmp(){
    const formValue=this.employeeForm().value();
    console.log(formValue)

  }

}