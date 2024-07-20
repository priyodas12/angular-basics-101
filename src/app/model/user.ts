import { Gender } from './gender';

export interface User {
  userId: Number;
  userName: String;
  password: String;
  firstName: String;
  lastName: String;
  gender: Gender;
  city: String;
  emailId: String;
  salary: Number;
  userType: String;
  age: Number;
}
