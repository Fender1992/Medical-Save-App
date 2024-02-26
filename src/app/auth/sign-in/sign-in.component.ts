import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
// Assuming AuthResponseData and Observable are used elsewhere or you might remove them if not used.

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  error: string = null;

  ngOnInit(): void {}

  constructor(private router: Router, private userService: UserService) {}

  onLoadSignUp() {
    this.router.navigate(['/signup']);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    // Assuming your userService has a login method that you're intending to use.
    this.userService.login(email, password).subscribe({
      next: (responseData) => {
        console.log(responseData);
        this.router.navigate(['/profiles']);
      },
      error: (errorMessage) => {
        this.error = errorMessage;
        console.error('Login error:', errorMessage);
      },
    });
    console.log(form.value);
    form.reset();
  }
}
