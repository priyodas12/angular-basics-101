import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-application-users',
  templateUrl: './application-users.component.html',
  styleUrl: './application-users.component.css',
})
export class ApplicationUsersComponent implements OnInit, OnDestroy {
  applicationUsers: string[] = [];
  constructor(private userService: UserServicesService) {
    this.applicationUsers = userService.appliationUserNames;
  }
  ngOnInit(): void {
    console.log('ApplicationUsersComponent: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ApplicationUsersComponent: ngOnDestroy');
  }

  removeApplicationUser(userIndex: number) {
    this.applicationUsers.splice(userIndex, 1);
  }
}
