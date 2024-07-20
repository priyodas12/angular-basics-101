import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  test: string = '';

  getApiUrl: string = 'http://localhost:3000/api/v2/users';
  postApiUrl: string = 'http://localhost:3000/api/v2/user';
  deleteApiUrl: string = 'http://localhost:3000/api/v2/users';

  constructor(public httpService: HttpClient) {}

  getData(): Observable<any> {
    return this.httpService.get<any>(this.getApiUrl).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      }),
      catchError((error) => {
        // Handle the error here
        console.error('Error fetching data', error);
        throw error;
      }),
    );
  }

  saveData(requestUser: User): any {
    console.log('requestUser', requestUser);
    return this.httpService
      .post(this.postApiUrl, requestUser)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  deleteData(requestUserId: number): any {
    console.log('requestUserId', requestUserId);
    return this.httpService
      .delete(this.deleteApiUrl + '/' + requestUserId)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
