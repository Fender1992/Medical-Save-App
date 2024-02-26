import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isLoading = false;
  error: string = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.userService.signup(firstName, lastName, email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/data-form']);
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
