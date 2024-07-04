import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-application-users',
  templateUrl: './application-users.component.html',
  styleUrl: './application-users.component.css',
})
export class ApplicationUsersComponent {
  applicationUsers: string[] = [];
  constructor(private userService: UserServicesService) {
    this.applicationUsers = userService.appliationUserNames;
  }

  removeApplicationUser(userIndex: number) {
    this.applicationUsers.splice(userIndex, 1);
  }
}
