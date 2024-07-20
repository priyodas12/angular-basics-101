import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-basics-101';
  refreshUsersIndicator!: boolean;

  setRefreshFlag(flag: boolean) {
    this.refreshUsersIndicator = flag;
    console.log(
      'AppComponent::refreshUserIndicator',
      this.refreshUsersIndicator,
    );
  }
}
