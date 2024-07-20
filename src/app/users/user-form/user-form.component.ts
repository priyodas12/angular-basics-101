import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../model/gender';
import { Status } from '../../model/status';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Output() doesRefreshRequired = new EventEmitter<boolean>();
  genderList = Gender;
  statusTypeList = Status;

  get genderArray(): string[] {
    return Object.values(this.genderList);
  }

  get statusArray(): string[] {
    return Object.values(this.statusTypeList);
  }

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
  ) {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      emailId: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userType: [''],
      city: [''],
      designation: [''],
      gender: [''],
      age: [''],
      salary: ['', Validators.required],
    });
  }

  refreshUserData() {
    this.doesRefreshRequired.emit(true);
  }

  onSubmit() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
      const user = this.myForm.value;
      this.userService.saveData(user);
    }
    this.refreshUserData();
    this.resetUserForm();
  }

  resetUserForm() {
    this.myForm = this.fb.group({
      userName: '',
      emailId: '',
      firstName: '',
      lastName: '',
      userType: '',
      city: '',
      designation: '',
      gender: '',
      age: '',
      salary: '',
    });
  }
}
