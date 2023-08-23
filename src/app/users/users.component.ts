import {Component} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title: string = "Список пользователей";
  userAge: number;
  user: User;

  constructor() {
    this.user = new User('Zahar', 25)
  }

  ngOnInit(): void {

  }
}
