import { Component } from '@angular/core';

@Component({
  selector: 'app-application-users',
  templateUrl: './application-users.component.html',
  styleUrl: './application-users.component.css',
})
export class ApplicationUsersComponent {
  appliationUserNames: string[] = [
    'John Smith',
    'Emily Johnson',
    'Michael Williams',
    'Jessica Brown',
    'David Jones',
    'Sarah Miller',
    'Daniel Davis',
    'Laura Wilson',
    'Robert Anderson',
    'Olivia Taylor',
    'James Thomas',
    'Emma Moore',
    'William Jackson',
    'Sophia Martin',
    'Joseph White',
    'Isabella Harris',
    'Christopher Clark',
    'Mia Lewis',
    'Benjamin Young',
    'Ava Walker',
  ];

  removeApplicationUser(userIndex: number) {
    this.appliationUserNames.splice(userIndex, 1);
  }
}
