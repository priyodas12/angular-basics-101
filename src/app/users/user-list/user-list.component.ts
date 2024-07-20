import { Component, OnInit } from '@angular/core';
import { PeriodicUserElement } from '../../model/userElement';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  dataSource: PeriodicUserElement[] = [];

  displayedColumns: string[] = [
    'userId',
    'userName',
    'firstName',
    'lastName',
    'password',
    'emailId',
    'designation',
    'salary',
    'userType',
    'city',
    'age',
    'gender',
  ];

  constructor(public userService: UserServicesService) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.userService.getData().subscribe(
      (userData) => {
        this.dataSource = userData;
      },
      (error) => {
        console.log('Error while loading user data!');
      },
    );
    console.log(this.dataSource);
  }
}
