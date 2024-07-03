import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatCardModule } from '@angular/material/card';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { SingleApplicationUserComponent } from './application-users/single-application-user/single-application-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ApplicationUsersComponent,
    SingleApplicationUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
