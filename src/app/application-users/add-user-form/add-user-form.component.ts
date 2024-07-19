import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Gender } from '../../gender';
import { MatTableDataSource } from '@angular/material/table';
import { Status } from '../../status';
import { UserServicesService } from '../../services/user-services.service';
import { User } from '../../user';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  constructor(public userService: UserServicesService) {}

  userForms: FormGroup = new FormGroup({
    username: new FormControl(''),
    fullName: new FormControl(''),
    gender: new FormControl(''),
    city: new FormControl(''),
    isActive: new FormControl('false'),
    sal: new FormControl('0'),
    email: new FormControl(''),
    age: new FormControl('0'),
  });
  genders: Gender[] = [
    Gender.Male,
    Gender.Female,
    Gender.Transgender,
    Gender.Other,
  ];
  statusList: Status[] = [Status.Active, Status.Inactive];

  addUser() {
    const {
      username,
      fullName,
      city,
      age,
      gender,
      sal,
      email,
      isActive,
      userId,
      favoriteAnimal,
      favoriteColor,
    } = this.userForms.value;
    let userFormData: User = {
      username,
      fullName,
      age,
      gender,
      sal,
      city,
      email,
      userId,
      favoriteColor,
      favoriteAnimal,
      isActive,
    };
    if (isActive === Status.Active) {
      userFormData.isActive = true;
    } else {
      userFormData.isActive = false;
    }
    this.userService.saveData(userFormData);
    this.resetForm(userFormData);
  }

  resetForm(userFormData:User) {
    userFormData = {
      userId: 0,
      username: '',
      city: '',
      fullName: '',
      email: '',
      gender: Gender.Other,
      isActive: false,
      favoriteAnimal: '',
      favoriteColor: '',
      sal: 0,
      age: 0,
    };
  }

  removeUser() {}

  // {
  //         "username": "musdhsd914",
  //         "fullName": "gowns wedge",
  //         "gender": "Female",
  //         "userId": 707065036,
  //         "city": "New Destiny",
  //         "favoriteColor": "orange",
  //         "favoriteAnimal": "Indo-Pacific Hump-backed Dolphin",
  //         "email": "Orval_Harris35@yahoo.com",
  //         "sal": 74860,
  //         "isActive": false
  //     }
}
