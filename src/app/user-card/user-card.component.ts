import {Component, Input} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  title: string = "Карточка пользователя"
  _userAge: number = 0;
  @Input()
  set userAge(age: number) {
    if (age < 0) {
      this._userAge = 0
    } else if (age > 100) {
      this._userAge = 100;
    } else {
      this._userAge = age;
    }
  }

  get userAge() {
    return this._userAge
  }

  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {

  }
}
