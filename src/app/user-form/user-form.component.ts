import {Component} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  name: string = "Ben";
  age: number = 42;

  calspan: number = 2;
  counter: number = 0;
  isWarning: boolean = false;
  checked: boolean = false;
  checked2: boolean = false;


  saveClick(event: Event) {
    this.counter++;
    console.log(this.age);
  }

  onChange(event: Event) {
    this.name = (event.target as HTMLTextAreaElement).value;
  }

  colorWarning(): string {
    return this.isWarning ? "warning" : "no-warning";
  }
}

// name: string, age: number
