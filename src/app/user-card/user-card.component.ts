import { Component } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  title: User = new User("Ben", 42)
}
