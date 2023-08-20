import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {}
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
