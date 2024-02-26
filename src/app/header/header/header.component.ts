import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService) {}

  ngOnInit() {}
  Logout() {
    this.userService.Logout();
  }
}
