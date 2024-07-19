import { BrowserModule } from '@angular/platform-browser';
import {
  AfterViewInit,
  Component,
  Input,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { User } from '../../user';
import { MatPaginator } from '@angular/material/paginator';
import { Gender } from '../../gender';

@Component({
  selector: 'app-single-application-user',
  templateUrl: './single-application-user.component.html',
  styleUrl: './single-application-user.component.css',
})
export class SingleApplicationUserComponent implements OnInit, AfterViewInit {
  // To track gender checkboxes
  isMale: boolean = false;
  isFemale: boolean = false;
  isOther: boolean = false;
  @Input()
  userList: User[] | undefined;

  displayedColumns: string[] = [
    'userId',
    'fullName',
    'email',
    'gender',
    'isActive',
    'favoriteAnimal',
    'favoriteColor',
    'sal',
    'age',
  ];

  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @Input()
  userId: number = 0;

  newUser: User = {
    fullName: '',
    email: '',
    gender: Gender.Other,
    isActive: false,
    favoriteAnimal: '',
    favoriteColor: '',
    sal: 0,
    username: '',
    city: '',
    userId: 0,
    age: 0,
  };

  ngOnInit(): void {
    if (this.userList) {
      this.dataSource.data = this.userList;
    }
    //after the component is created and view is created.
    // Initializing properties
    // Making API calls to load data
    // Setting up subscriptions
    // Any logic that needs to be executed after the component is constructed
    //console.log('SingleApplicationUserComponent: ngOnInit');
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribing from observables
     * Cleaning up timer
     * Detaching event handler
     * Any cleanup needed when the component is being destroyed*/
    //console.log('SingleApplicationUserComponent: ngOnDestroy');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addUser() {
    if (this.newUser.username && this.newUser.fullName && this.newUser.email) {
      const newData = this.dataSource.data;
      newData.push({ ...this.newUser });
      this.dataSource.data = newData;
      this.resetForm();
    }
  }
  resetForm() {
    this.newUser = {
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
  updateGender() {
    if (this.isMale) {
      this.newUser.gender = Gender.Male;
      this.isFemale = false;
      this.isOther = false;
    } else if (this.isFemale) {
      this.newUser.gender = Gender.Female;
      this.isMale = false;
      this.isOther = false;
    } else if (this.isOther) {
      this.newUser.gender = Gender.Transgender;
      this.isMale = false;
      this.isFemale = false;
    } else {
      this.newUser.gender = Gender.Other;
    }
  }

  removeUser() {}
}
