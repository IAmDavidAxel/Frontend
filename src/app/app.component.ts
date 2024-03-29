import { Component } from '@angular/core';
import {User} from './model/user';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Couronne Afro';

  currentUser: User;

  constructor(
    private router: Router,
    private  authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
