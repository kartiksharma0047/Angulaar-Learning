import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  employees: any[] = [
    { id: 1, name: 'Amit' },
    { id: 2, name: 'Ankit' },
    { id: 3, name: 'Raj' },
    { id: 4, name: 'Rahul' },
    { id: 5, name: 'Ravi' },
  ];

  isExist:boolean=true

  CheckStatus(){
    this.isExist=!this.isExist
  }
}