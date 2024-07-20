import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PeriodicUserElement } from '../../model/userElement';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit, OnChanges {
  @Input()
  refreshIndicator: boolean = false;

  dataSource: PeriodicUserElement[] = [];

  editMode: boolean = false;

  displayedColumns: string[] = [
    'userId',
    'userName',
    'firstName',
    'lastName',
    'emailId',
    'designation',
    'salary',
    'userType',
    'city',
    'age',
    'gender',
    'action',
  ];

  constructor(public userService: UserServicesService) {}

  ngOnInit() {
    this.loadUserData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['refreshIndicator']) {
      console.log('refresh', this.dataSource);
      this.loadUserData();
    }
    this.refreshIndicator = !this.refreshIndicator;
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
    console.log('loadUserData', this.dataSource);
  }

  onEdit(editUser: any) {
    console.log(editUser);
    this.editMode = true;
  }
}
