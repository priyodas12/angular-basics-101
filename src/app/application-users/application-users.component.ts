import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { User } from '../user';

@Component({
  selector: 'app-application-users',
  templateUrl: './application-users.component.html',
  styleUrl: './application-users.component.css',
})
export class ApplicationUsersComponent implements OnInit {

  userList: User[] = [];
  constructor(private userService: UserServicesService) {}
  ngOnInit(): void {
    this.userService.getData().subscribe(
      (data) => {
        this.userList = data;
      },
      (error) => {
        console.error('There was an error!', error);
      },
    );
    console.log('ApplicationUsersComponent: ngOnInit');
  }
}
