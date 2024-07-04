import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-single-application-user',
  templateUrl: './single-application-user.component.html',
  styleUrl: './single-application-user.component.css',
})
export class SingleApplicationUserComponent implements OnInit, OnDestroy {
  @Input()
  userName: string = 'X';

  @Input()
  userId: number = 0;

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();

  emitDeleteIntemation() {
    this.deleteUser.emit(this.userId);
  }

  ngOnInit(): void {
    //after the component is created and view is created.

    // Initializing properties
    // Making API calls to load data
    // Setting up subscriptions
    // Any logic that needs to be executed after the component is constructed
    console.log('SingleApplicationUserComponent: ngOnInit');
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribing from observables
     * Cleaning up timer
     * Detaching event handler
     * Any cleanup needed when the component is being destroyed*/
    console.log('SingleApplicationUserComponent: ngOnDestroy');
  }
}
