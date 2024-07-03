import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-application-user',
  templateUrl: './single-application-user.component.html',
  styleUrl: './single-application-user.component.css',
})
export class SingleApplicationUserComponent {
  @Input()
  userName: string = 'X';

  @Input()
  userId: number = 0;
}
