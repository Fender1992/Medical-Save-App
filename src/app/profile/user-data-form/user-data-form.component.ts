import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrl: './user-data-form.component.css',
})
export class UserDataFormComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}

  ngOnInit() {}

  addUserData(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const age = form.value.age;
    const height = form.value.height + 1;
    const weight = form.value.weight + 1;
    const health = form.value.health;
    this.userDataService
      .postUsers(age, height, weight, health)
      .subscribe((userResData) => {
        console.log(userResData);
      });
    //   this.userDataService.userData(age, height, weight, health).subscribe();
  }
}
