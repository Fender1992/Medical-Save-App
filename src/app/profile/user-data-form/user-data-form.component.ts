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
    const height = form.value.height;
    const weight = form.value.weight;
    const health = form.value.health;
    this.userDataService.userData(age, height, weight, health).subscribe();
  }
}
